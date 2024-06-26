import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Header/Profile";
import "./App.css";
import MyProjects from "./components/Projects/MyProjects";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <main className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="presentation">
        <Header />
        <Profile />
      </main>
      <MyProjects />
      <Footer />
    </main>
  );
};

export default App;
