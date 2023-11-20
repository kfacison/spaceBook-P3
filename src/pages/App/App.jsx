import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import Profile from "../Profile/Profile";
import AllProfiles from "../AllProfiles/AllProfiles";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import ProfileEditPage from "../ProfileEditPage/ProfileEditPage";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeProvider } from "../../contexts/ThemeContext";
import NewsFeed from "../NewsFeed/NewsFeed";

export default function App() {
  const [user, setUser] = useState(getUser());

  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={theme}>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/profiles/:id" element={<Profile user={user} />} />
              <Route path="/profiles/:id/edit" element={<ProfileEditPage />} />
              {/*need id defined  ^^^^^ */}
              <Route path="/profiles" element={<AllProfiles />} />
              <Route path="/feed" element={<NewsFeed />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </div>
  );
}
