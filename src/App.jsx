import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {
  TabSwitch,
  MiddelSection,
  GetStartedButton,
} from "./components/MiddelSection";
import LoginPage from "./components/Loginpage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";



const App = () => {
  const [tasks, setTasks] = useState(() => {
    // fetch notes form localstorage when state is loading
    let notes = JSON.parse(localStorage.getItem("tasks")) ?? [];
    return notes;
  });

  const [newTask, setNewTask] = useState("");

  // for sideeffects
  useEffect(() => {
    // update the localstorage data

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <TabSwitch />
      <MiddelSection />
      <GetStartedButton />
      <Footer />

    </div>


    
    <>
      <BrowserRouter>
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
          <Route
            path="/HomePage"
            element={
              <HomePage
                tasks={tasks}
                setTasks={setTasks}
                newTask={newTask}
                setNewTask={setNewTask}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
