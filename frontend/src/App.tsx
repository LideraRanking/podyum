import { Routes, Route, Link } from "react-router";

import Login from "./pages/Login";
import Home from "./pages/Home";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App