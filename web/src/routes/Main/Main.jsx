import "./Main.scss";
import Drawer from "../../component/Drawer/Drawer";
import Rewards from "../../component/Rewards/Rewards";
import HomePage from "../../pages/HomePage/HomePage";
import PostPage from "../../pages/PostPage/PostPage";
import { Route, Routes } from "react-router-dom";
import CreateChallenge from "../../pages/CreateChallengePage/CreateChallengePage";


const Main = () => {
  return (
    <main className="app">
      <div className="app__drawer">
        <Drawer />
      </div>
      <div className="app__body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:challengeId" element={<PostPage />} />
          <Route path="/c/add" element={<CreateChallenge/>}/>
          <Route path="/:challengeId/p/add/" element={<Rewards/>}/>
          <Route path="/awards" element={<Rewards />} />
          <Route path="/profile" element={<Rewards />} />
          <Route path="/settings" element={<Rewards />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
