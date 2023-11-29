import React, { useContext, useState, useEffect } from "react";
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
import * as profilesAPI from "../../utilities/profiles-api";

export default function App() {
  const [user, setUser] = useState(getUser());

  const { theme } = useContext(ThemeContext);

  const [myProfile, setMyProfile] = useState([]);

  useEffect(() => {
    async function getMyProfile() {
      try {
        console.log("get myProf");
        const profile = await profilesAPI.getProfile(user);
        setMyProfile(profile);
      } catch (error) {
        console.error("Error getting my profile:", error);
        // Handle the error, e.g., set an error state, display a message, etc.
      }
    }
    getMyProfile();
  }, [user]);

  return (
    <div data-theme={theme}>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} myProfile={myProfile} />
            <Routes>
              <Route
                path="/profiles/:id"
                element={<Profile user={user} myProfile={myProfile} />}
              />
              <Route
                path="/profiles/:id/edit"
                element={
                  <ProfileEditPage
                    myProfile={myProfile}
                    setMyProfile={setMyProfile}
                    setUser={setUser}
                  />
                }
              />
              {/*need id defined  ^^^^^ */}
              <Route
                path="/profiles"
                element={
                  <AllProfiles
                    myProfile={myProfile}
                    setMyProfile={setMyProfile}
                  />
                }
              />
              <Route path="/" element={<NewsFeed myProfile={myProfile} />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} setMyProfile={setMyProfile}/>
        )}
      </main>
    </div>
  );
}
