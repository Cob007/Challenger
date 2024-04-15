import "./Main.scss";
import Drawer from "../../component/Drawer/Drawer";
import Rewards from "../../component/Rewards/Rewards";
import HomePage from "../../pages/HomePage/HomePage";
import PostPage from "../../pages/PostPage/PostPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CreateChallenge from "../../pages/CreateChallengePage/CreateChallengePage";
import CreatePost from "../../pages/CreatePostPage/CreatePostPage";
import { useEffect } from "react";
import Profile from "../../pages/ProfilePage/ProfilePage";
import Settings from "../../pages/SettingsPage/SettingsPage";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/auth");
    }

  }, []);

  return (
    <main className="app">
      <div className="app__drawer">
        <Drawer />
      </div>
      <div className="app__body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:challengeId" element={<PostPage />} />
          <Route path="/c/add" element={<CreateChallenge />} />
          <Route path="/:challengeId/p/add/" element={<CreatePost />} />
          <Route path="/awards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
