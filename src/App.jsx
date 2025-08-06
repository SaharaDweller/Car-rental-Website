import NavBar from "./components/navBar"
import Content from "./components/content"
import About from "./components/about"
import Services from "./components/services"
import CarList from "./components/carList"
import UserReview from "./components/userReview"
import AppStoreBanner from "./components/appStoreBanner"
import Contact from "./components/contact"
import Footer from "./components/footer"

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState , useEffect } from "react"

export default function App(){

  useEffect(()=>{
    AOS.init({
      duration : 800 ,
      easing : "ease-in-out" ,
      offset : 100 ,
      delay : 100
    })
  },[]) 

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement;
  useEffect(() => {
    localStorage.setItem("theme", theme);
  
    if (theme === "dark") {
        element.classList.add("dark");
    } else {
        element.classList.remove("dark");
    }
    }, [theme]);

  return(
    <>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Content theme={theme}/>
      <About/>
      <Services/>
      <CarList/>
      <UserReview/>
      <AppStoreBanner/>
      <Contact/>
      <Footer/>
    </>
  )
}