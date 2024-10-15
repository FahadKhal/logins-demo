import "./App.css";
import "./index.css";
import Login from "./components/Login";
import { AuthProvider } from "../context/AuthContext";
import { Toast } from "./components/global/Toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <AuthProvider>
        <Toast />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
