import Drawer from "../../component/Drawer/Drawer";
import Rewards from "../../component/Rewards/Rewards";
import { Route, Routes } from "react-router-dom";
import "./Main.scss";

/***
 * I will the side component here
 * and general header for the app
 ***/

const Main = () => {
  return (
    <main className="app">
      <div className="app__drawer">
        <Drawer />
      </div>
      <div className="app__body">
        <Routes>
          <Route path="/" element={<Rewards />} />

          <Route path="/awards" element={<Rewards />} />
          <Route path="/profile" element={<Rewards />} />

          <Route path="/settings" element={<Rewards />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
