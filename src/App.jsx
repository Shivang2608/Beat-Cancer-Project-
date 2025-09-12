// src/App.jsx

import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { Home, Profile, Onboarding } from "./pages";
import MedicalRecords from "./pages/records/index";
import ScreeningSchedule from "./pages/ScreeningSchedule";
import SingleRecordDetails from "./pages/records/single-record-details";

// 1. IMPORT FROM BOTH HOOKS
import { usePrivy } from "@privy-io/react-auth";
import { useStateContext } from "./context";

const App = () => {
  // 2. USE BOTH HOOKS SEPARATELY
  const { user, authenticated, ready, login } = usePrivy();
  const { currentUser, fetchUserByEmail } = useStateContext();
  const navigate = useNavigate();

  // 3. NEW useEffect: Fetches the user from your database
  //    This runs when Privy's 'user' object appears.
  useEffect(() => {
    if (user && user.email) {
      // Call the function from your context
      fetchUserByEmail(user.email.address);
    }
  }, [user, fetchUserByEmail]); // Dependency array

  // 4. YOUR OLD useEffect: Handles navigation
  //    This logic is now correct.
  useEffect(() => {
    if (ready && !authenticated) {
      login();
    } else if (ready && authenticated && user && !currentUser) {
      // (Added 'ready' and 'authenticated' for safety)
      // This logic will now run!
      navigate("/onboarding");
    }
  }, [user, authenticated, ready, login, currentUser, navigate]);

  // 5. If Privy isn't ready, or user is logging in, show nothing
  //    (or a loading spinner)
  if (!ready || (ready && !authenticated)) {
    return null; // Or <Loader />
  }

  // 6. The rest of your app (wrapped for safety)
  return (
    authenticated && (
      <div className="sm:-8 relative flex min-h-screen flex-row bg-[#13131a] p-4">
        <div className="relative mr-10 hidden sm:flex">
          <Sidebar />
        </div>

        <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/medical-records" element={<MedicalRecords />} />
            <Route
              path="/medical-records/:id"
              element={<SingleRecordDetails />}
            />
            <Route
              path="/screening-schedules"
              element={<ScreeningSchedule />}
            />
          </Routes>
        </div>
      </div>
    )
  );
};

export default App;