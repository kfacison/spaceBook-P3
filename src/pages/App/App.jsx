import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import Profile from "../Profile/Profile";
import AllProfiles from "../AllProfiles/AllProfiles";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import ProfileEditPage from "../ProfileEditPage/ProfileEditPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/profiles/:id" element={<Profile user={user} />} />
            <Route path="/profiles/:id/edit" element={<ProfileEditPage />} />
            {/*need id defined  ^^^^^ */}
            <Route path="/profiles" element={<AllProfiles />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
