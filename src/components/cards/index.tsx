import { SlLock } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type CardType = {
    avatar: string;
    title: string;
}

export function Card({ avatar, title}: CardType){
    return(
        <div className={styles.containerAvatar}>
            <div className={styles.wrapper}>
                <img src={avatar} alt="avatar" />
            </div>
            <span>{title}</span>
            <i>
                <SlLock color='#808080' fontSize='20' />
            </i>
        </div>
    );
}