import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import {
  TabSwitch,
  MiddelSection,
  GetStartedButton,
} from "./components/MiddelSection";
import LoginPage from "./components/Loginpage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

const App = () => {
  const [task,setTask] = useState(() => {
    // fetch notes form localstorage when state is loading
    let notes  = JSON.parse(localStorage.getItem("tasks")) ?? [];
    return notes;
  });
  // for sideeffects
  useEffect(()=>{
    // update the localstorage data
    localStorage.setItem("tasks",JSON.stringify(task));
  } , [task]);
  return ( 
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar />
              <Hero />
              <Main />
              <TabSwitch />
              <MiddelSection />
              <GetStartedButton />
            </>
          }
        />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter> */}

    <HomePage task={task} setTask={setTask} />
      
    </>
  );
};

export default App;
