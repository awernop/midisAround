'use client'
import { useEffect, useState } from "react";
import { HomeP } from "@/widgets/Home/HomeP";
import { Work } from "@/widgets/Work/Work";
import { Chill } from "@/widgets/Chill/Chill";
import { Meal } from "@/widgets/Meal/Meal";
import { Sport } from "@/widgets/Sport/Sport";
import { Questions } from "@/widgets/Questions/Questions";
import { HeaderScroll } from "@/widgets/HeaderScroll/HeaderScroll";
import styles from "./page.module.css";


export default function Home() {
  
  const [header, setHeader] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      let dataScroll = window.scrollY;
      dataScroll > 200 ? setHeader('flex') : setHeader('none') 
    };
    
    document.addEventListener('scroll', handleScroll);
    
  }, []);


  return (
    <div className="container">
      <HeaderScroll visible = {header} />
      <HomeP />
      <Work />
      <Chill />
      <Meal />
      <Sport />
      <Questions />
    </div>
  )
}
