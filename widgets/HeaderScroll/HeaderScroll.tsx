import { Map } from '../Map/Map';
import { useState } from 'react';

import style from './headerscroll.module.scss';

const links = [
    {title: 'Работа', link: '#work'},
    {title: 'Отдых', link: '#chill'},
    {title: 'Перекус', link: '#meal'},
    {title: 'Спорт', link: '#sport'},
    {title: 'О проекте', link: '/about'},
]

export const HeaderScroll = ({visible}) =>{
    const [openMap, setOpenMap] = useState(false);

    return(
        <>
        {openMap && <Map setOpenMap={setOpenMap}/>}
        <div className={style.main} style={{display: `${visible}`}}>
            <ul>
            {links.map(({title, link}, i) => {
                        return <li key={i}><a href={link}>{title}</a></li>
                    })}
                    <li onClick={() => setOpenMap(!openMap)}><a>Карта</a></li>
            </ul>
        </div>
        </>
    )
}