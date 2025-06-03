import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvidder } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
    <ThemeProvidder value={{themeMode, darkTheme, lightTheme}}>
      <Navbar />
      <Outlet />
      <Footer/>
    </ThemeProvidder>
    </>
  );
}

export default App;
