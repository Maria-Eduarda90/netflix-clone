import logo from '../../img/logo.png'
import avatar from '../../img/avatar2.png'
import styles from './styles.module.scss';

import { BiBell } from 'react-icons/bi';
import { SlMagnifier } from 'react-icons/sl';
import { MdArrowDropDown } from 'react-icons/md';

type HeaderColorType = {
    black: boolean;
}

export function Header({ black }: HeaderColorType){
    return(
        <header className={black ? `${styles.black}` : ''} id={styles.header}>
            <div className={styles.containerInfo}>
                <a href="https://www.netflix.com/">
                    <img src={logo} alt="logo" />
                </a>
                <div className={styles.navigation}>
                    <ul>
                        <li>Inicio</li>
                    </ul>
                    <ul>
                        <li>Séries</li>
                    </ul>
                    <ul>
                        <li>Filmes</li>
                    </ul>
                    <ul>
                        <li>Bombando</li>
                    </ul>
                    <ul>
                        <li>Minha lista</li>
                    </ul>
                    <ul>
                        <li>Navegar por idiomas</li>
                    </ul>
                </div>
            </div>
            <div className={styles.avatar}>
                <SlMagnifier fontSize={20}/>
                <p>infantil</p>
                <BiBell fontSize={20}/>
                <div>
                    <img src={avatar} alt="avatar" />
                    <MdArrowDropDown fontSize={25} />
                </div>
            </div>
        </header>
    );
}