import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import GitRepos from "./components/GitRepos";
import TechStack from "./components/TechStack";
import Collab from "./components/Collab";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gitrepos" element={<GitRepos />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/collab" element={<Collab />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;