import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Header />
    </div>
  );
};

export default App;
