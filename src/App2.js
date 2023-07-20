import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import UserData from "./components/UserData";
import Todos from "./components/Todos";
import { Route, Routes } from "react-router-dom";

const App2 = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UserData />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </>
  );
};

export default App2;
