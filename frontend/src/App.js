import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageUser from "./pages/PageUser";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Page" element={<PageUser />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
