'use client'
import Link from "next/link";
import { Button } from "@/shared/Ui/Ui";
import img from "../../img/home.png";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import anime from "animejs";
import { useRef, useEffect } from "react";

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

import style from "./home.module.scss";

const links = [
    {link: "/#work", title: "Работа"},
    {link: "/#chill", title: "Отдых"},
    {link: "/#meal", title: "Перекус"},
    {link: "/#sport", title: "Спорт"},
];

const text = [
    {text: "Где посидеть с друзьями на большой перемене?"},
    {text: "В каком кабинете есть все нужные тебе программы?"},
    {text: "Где самая вкусная еда?"},
];

export const HomeP = () =>{
    const itemRef = useRef(null);

    useEffect(() => {
        anime({
            targets: itemRef.current,
            translateX: [-100, 0],
            duration: 1000,
        });
    }, []);

    return(
    <div className={style.main}>
        <ul className={style.nav}>
                    {links.map(({title, link}, i) => {
                        return <li key={i}><a href={link}>{title}</a></li>
                    })}
            </ul>
        <div className={style.bottom}>
            <div className={style.bottom__left}>
                <h1>Не знаешь, где провести время в МИДиС?</h1>
                <h2>Мы поможем!</h2>
                <ul ref={itemRef}>
                    {text.map(({text}, i) => {
                        return <li key={i}>{text}</li>
                    })}
                </ul>
                <Button type={'orange'} href="/#map">Узнать!</Button>
            </div>
            <div className={style.bottom__right}>
                <Image src={img} alt=""/>
            </div>
        </div>
    </div>
    )
}