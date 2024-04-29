'use client'
import pic1 from "../../img/sport.png";
import pic2 from "../../img/swimngpool.png";
import pic3 from "../../img/play.png";
import { ImageC } from "@/shared/Ui/Ui";
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

import style from "./sport.module.scss";

const locations = [
    {src: pic2, title: "Бассейн", time: "8:00-18:00", description: "Хочешь расслабить мышцы в воде? Любишь плавать? Хочешь научиться? Приходи в бассейн МИДиС - дружелюбные преподаватели все расскажут, покажут и выделят дорожку, а после ты сможешь согреться в сауне."},
    {src: pic1, title: "Тренажерный зал", time: "10:00-19:00", description: "Зарядись бодростью в тренажерном зале МИДиС! Тут ты сможешь подкачать мышцы, улучшить свою пластику и даже поиграть в дартс! Скорее приходи в малый актовый на третьем этаже школы."},
    {src: pic3, title: "Спортзал", time: "8:00-20:00", description: "Любишь активные игры: футбол, баскетбол, волейбол? Тогда скорее отправляйся в спортзал МИДиС! Не забудь позвать болельщиков, чтобы поддержать твою игру."},
]

export const Sport = () =>{
    return(
        <div className={style.main} id="sport">
            <h2>Где заняться спортом?</h2>
            <div className={style.bottom}>
            {locations.map((item, i) => {
                    return(
                        <div data-aos="fade-up" 
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000" key={i} className={style.card}>
                            <div className={style.left}>
                                <h2>{item.title}</h2>
                                <span>{item.time}</span>
                                <p>{item.description}</p>
                            </div>
                            <ImageC src={item.src} width={638}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}