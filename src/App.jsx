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

const App = () => {
  return (
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
      </Routes>
    </BrowserRouter>
      
    </>
  );
};

export default App;
