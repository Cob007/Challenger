import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const Auth = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<LoginPage/>}/>
    </Routes>
  )
};

export default Auth;
