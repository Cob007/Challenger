import { Route, Routes, useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import Logo from "../../assets/logo/logo_white.svg";
import { useEffect, useState } from "react";

const LandingPage = () => {

  const  navigate  = useNavigate()

  const handleClick = () => {
    navigate('/auth')
  }

  const screens =[
    {
      id: 1, 
      title: "Create",
      type: "image"
    }, 
    {
      id: 2, 
      title: "View",
      type: "image"
    },
    {
      id: 3, 
      title: "Win",
      type: "image"
    }]
  const [count, setCounter] = useState(1)
  const [screen, setScreen] = useState(screens[0])
  const [style,  setStyle] = useState('')

  const loadCounter = () => {
    setTimeout(() => {
      let screenDisplay = {}
      if (count == 3){
        screenDisplay = screens[0]
        setStyle('img0')
        setCounter((prev) => 1)
      } else {
        screenDisplay = screens[count]
        setStyle('img'+count)
        setCounter((prev) => prev+1)
      }
      setScreen(prev => screenDisplay)
    }, 2000)
  }

  useEffect(()=>{
    loadCounter()
  },[count])


  return (
    <section className={`cont-lp ${style}`}>
      <img className="cont-lp__logo" src={Logo} alt="App Logo" />
      <h1 className="cont-lp__header"><span>{screen.title}</span> A Challenge</h1>
      <button onClick={handleClick} className="cont-lp__button">Get Started</button>
    </section>
  );
};

export default LandingPage;
