import Image from "next/image";

import "./ui.scss";

export const Button = ({children, type, href}) =>{
    return(
        <a href={href}>
        <button className={`btn ${type}`}>
            <span>
                {children}
            </span>
        </button>
        </a>
    )
}

export const ImageC = ({src, width}) =>{
    return <Image src = {src} alt = "" style={{borderRadius:44, width:width}}/>
}