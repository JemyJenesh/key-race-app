import { Route, Routes } from "react-router-dom";

import { Home, User } from "./pages";

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
