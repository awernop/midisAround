import { Button } from '@/shared/Ui/Ui';

import style from './about.module.scss';

export default function About(){
    return(
        <div className='container'>
        <div className={style.main}>
            <h2>О проекте</h2>
            <p>Данный сайт создан в рамках учебной практики 
                на базе Международного Института Дизайна 
                и Сервиса в качестве индивидуального 
                задания по направлению Проектирование  
                и разработка веб-приложения студенткой 
                третьего курса группы П-31 Борисовой Анной</p>
            <Button type='orange' href='/'>Вернуться на главную</Button>
        </div>
        </div>
    )
}