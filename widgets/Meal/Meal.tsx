'use client'
import img from "../../img/meal.png";
import { ImageC } from "@/shared/Ui/Ui";
import choco from "../../img/chocolate.png";
import coffee from "../../img/coffee.png";
import ice from "../../img/icecreame.png";
import pizza from "../../img/pizza.png";
import soup from '../../img/soup.png';
import drink from '../../img/drink.png'
import salad from '../../img/salad.png'
import potato from '../../img/popato.png';
import { useState } from "react";
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

import style from "./meal.module.scss";

const menu = [
    {src: pizza, title: "Пицца", price: "60 рублей", hit: true},
    {src: coffee, title: "Кофе", price: "55 рублей", hit: false},
    {src: ice, title: "Мороженое", price: "80 рублей", hit: false},
    {src: choco, title: "Шоколад", price: "70 рублей", hit: false},
];

const menu_s = [
    {src: soup, title: "Суп", price: "80 рублей", hit: false},
    {src: drink, title: "Компот", price: "40 рублей", hit: true},
    {src: salad, title: "Салат", price: "50 рублей", hit: false},
    {src: potato, title: "Второе", price: "100 рублей", hit: true},
]

const ariadna = {title: 'Бистро “Ариадна”', description: 'Бистро, расположенное на первом этаже, отлично подойдет для быстрого перекуса. Там есть все! Кофе, чай, соки, газировка, соленая и сладкая выпечка - успей скорее, пока все не разобрали!'}
const canteen = {title: 'Столовая', description: 'Выдалость окно или настал час большой перемены и ты хочешь плотно поесть? Тогда скорее беги в столовую МИДиС! Тут тебя ждут первое, второе и компот. Скорее, пока осталась добавка!'}

export const Meal = () =>{
    const [mena, setMenu] = useState(menu)
    const [about, setAbout] = useState(ariadna)

    return(
    <div className={style.main} id="meal">
        <h2>Где перекусить?</h2>
        <div className={style.sort}>
            <form action="">
            <div className={style.btn__div} onClick={() => (setMenu(menu), setAbout(ariadna))}>
                <input type='radio' className={style.btn} / >
                <p>Бистро</p>
            </div>
            <div className={style.btn__div} onClick={() => (setMenu(menu_s), setAbout(canteen))}>
                <input type='radio' className={style.btn} />
                <p>Столовая</p>
            </div>
            </form>
        </div>
        <div className={style.top} data-aos="fade-up" 
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000">
            <ImageC src={img} width={639} />
            <div className={style.right}>
                <h2>{about.title}</h2>
                <p>{about.description}</p>
            </div>
            </div>
            <div className={style.bottom} data-aos="fade-up" 
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000">
            {mena.map((item, i) => {
                    return(
                        <div key = {i} className={style.card}>
                            <div style={{backgroundImage: `url(${item.src.src})`}} className={style.card__img}>
                                {item.hit == true ? <div className={style.hit}>Хит!</div> : null}
                            </div>
                            <span className={style.title}>{item.title}</span>
                            <p className={style.price}>{item.price}</p>
                        </div>
                    )
                })}
            </div>
        
    </div>
    )
}