import avatar from '../../img/avatar.jpg';
import avatar2 from '../../img/avatar2.png';

import { Button } from '../../components/button';
import { Card } from '../../components/cards';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';


export function Login(){
    return(
        <div className={styles.container}>
            <h1>Quem está assistindo?</h1>
            <div className={styles.card}>
                <Card avatar={avatar} title='Luke Skywalker' />
                <Link to="/home">
                    <Card avatar={avatar2} title='Meyh Skywalker ' />
                </Link>
            </div>
            <Button/>
        </div>
    )
}