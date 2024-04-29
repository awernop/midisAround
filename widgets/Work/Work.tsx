'use client'
import { Button, ImageC } from "@/shared/Ui/Ui";
import Image from "next/image";
import img1 from "../../img/251.png";
import img2 from "../../img/206.png";
import img3 from "../../img/321.png";
import computer from "../../img/computer.svg";
import disigner from "../../img/disigner.svg";
import lector from "../../img/lector.svg";
import programmer from "../../img/programmer.svg";
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


import style from "./work.module.scss";

const offices = [
    {src: img1, number: "Кабинет 251", computer: true, programmer: true, lector: false, disigrer: false, description: "Компьютерный класс на втором этаже в испытательном полигоне вычислительной техники, идеально подходит для работы программистов"},
    {src: img2, number: "Кабинет 206", computer: false, programmer: false, lector: true, disigrer: false, description: "Просторная аудитория на втором этаже, стены украшены картинами наших дизайнеров, а на стене расположен большой проектор - прекрасное мето для докладов и презентаций!"},
    {src: img3, number: "Кабинет 321", computer: true, programmer: false, lector: false, disigrer: true, description: "Современный кабинет на третьем этаже, на компьютерах установлены программы для работы графических дизайнеров и 3D-художников"},
]

export const Work = () =>{
    return(
        <div className={style.main}>
            <div className={style.top}>
                <h2 id="work">Где поработать?</h2>
                <Button type={'lined'} href="#">Все кабинеты</Button>
            </div>
            <div className={style.bottom}>
                {offices.map((item, i) => {
                    return(
                        <div data-aos="fade-up" 
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000" key={i} className={style.card}>
                            <ImageC src={item.src} width={420}/>
                            <div className={style.txt}>
                                <div className={style.title}>
                                    <span>{item.number}</span>
                                    <div className={style.what}>
                                        {item.computer == true ? <Image src={computer} alt=""/> : null}
                                        {item.disigrer == true ? <Image src={disigner} alt=""/> : null}
                                        {item.lector == true ? <Image src={lector} alt=""/> : null}
                                        {item.programmer == true ? <Image src={programmer} alt=""/> : null}
                                    </div>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}