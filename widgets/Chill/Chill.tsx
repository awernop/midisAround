'use client'
import { ImageC, Button } from "@/shared/Ui/Ui";
import { useState } from "react";
import Image from "next/image";
import img1 from "../../img/libary.png";
import img2 from "../../img/hall.png";
import img3 from "../../img/chillZone.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

import style from "./chill.module.scss";

const images = [
    {src: img1, title: "Библиотека"},
    {src: img2, title: "Холл с фонтаном"},
    {src: img3, title: "Коворкинг"},
];

const hall = {src: img2, title: 'Холл с фонтаном', description: 'Просторный холл, в котором ты можешь назначить встречу с друзьями, выпить кофе, посидеть на мягких диванчиках и отдохнуть между парами. Не забывай об экологии! Прмямо здесь расположены баки для перерабатываемого мусора, а большие часы помогут не опоздать на занятия.'}
const libary = {src: img1, title: 'Библиотека', description: 'В нашей библиотеке отличная атмосфера для учебы, а компьютеры с интернетом и всеми необходимыми программами позволят быстро отредактировать нужные документы или даже сделать презентацию'}
const co = {src: img3, title: 'Коворкинг', description: 'Коворкинг - это отличное место, чтобы встретиться с друзьями в неформальной обстановке, мягкие кресла создают комфортную обстановку, а если у тебя есть ноутбук, садись за стол и не отвлекайся от работы!'}

export const Chill = () =>{
    const [title, setTitle] = useState(hall);

    return(
        <div id="chill" className={style.main}>
            <h2>Где отдохнуть?</h2>
            <div className={style.top} data-aos="fade-up" 
                data-aos-easing="ease-in-out"
                data-aos-duration="1000">
                <ImageC src={title.src} width={641}/>
                <div className={style.right}>
                    <h2>{title.title}</h2>
                    <p>{title.description}</p>
                    <Button href="/#map" type={'orange'}>Как найти?</Button>
                </div>
            </div>
            <div className={style.bottom} 
                data-aos="fade-up" 
                data-aos-easing="ease-in-out"
                data-aos-duration="1000">
                    <div onClick={() => setTitle(libary)} className={style.card}>
                        <Image src={img1} alt="" className={style.card__img}/>
                        <span>Библиотека</span>
                    </div>
                    <div onClick={() => setTitle(hall)} className={style.card}>
                        <Image src={img2} alt="" className={style.card__img}/>
                        <span>Холл с фонтаном</span>
                    </div>
                    <div onClick={() => setTitle(co)} className={style.card}>
                        <Image src={img3} alt="" className={style.card__img}/>
                        <span>Коворкинг</span>
                    </div>
            </div>
        </div>
    )
}