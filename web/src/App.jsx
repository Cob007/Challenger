import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Auth from "./routes/Auth/Auth";
import Main from "./routes/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Auth />} />
        <Route path="/app/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
