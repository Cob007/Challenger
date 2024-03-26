import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";

const Auth = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        
    </Routes>
  )
};

export default Auth;
