import Image from "next/image";
import logo from "../../img/logo.png";

import style from "./footer.module.scss";

const links = [
    {title: "Работа", link: "/#work"},
    {title: "Отдых", link: "/#chill"},
    {title: "Перекус", link: "/#meal"},
    {title: "Спорт", link: "/#sport"},
    {title: "О проекте", link: "#"},
];

export const Footer = () =>{
    return(
    <footer className={style.footer}>
        <div className={style.main}>
            <div className={style.logo}>
                <Image src={logo} alt=""/>
                <span>г. Челябинск, ул. Ворошилова, 12 <br />
                +7 (351) 202-00-73 <br />
                info@midis.ru</span>
            </div>
            <ul>
            {links.map((item, i) => {
                    return(
                        <li><a href={item.link}>{item.title}</a></li>
                    )
                })}
            </ul>
        </div>
    </footer>
    )
}