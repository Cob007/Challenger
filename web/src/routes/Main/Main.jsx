import Rewards from "../../component/Rewards/Rewards";
import { Route, Routes } from "react-router-dom";

/***
* I will the side component here
* and general header for the app
***/


const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Rewards />} />
    </Routes>
  );
};


export default Main