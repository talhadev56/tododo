import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import {
  TabSwitch,
  MiddelSection,
  GetStartedButton,
} from "./components/MiddelSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <TabSwitch />
      <MiddelSection />
      <GetStartedButton />
    </div>
  );
};

export default App;
