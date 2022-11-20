import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./Contact";
import ChatPage from "./ChatPage";
import Home from "./Home";
import AppBar from "../components/AppBar";
import NotFound from "./NotFound";

const Navigation = () => {
  return (
    <div>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ChatPage" element={<ChatPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
