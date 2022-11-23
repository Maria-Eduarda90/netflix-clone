import { useEffect, useState } from 'react';
import api from '../../api/api';
import { MovieList } from '../../components/MovieList';

import styles from './styles.module.scss';

type ListProps = {
    id: number,
    slug: string;
    title: string;
    items: any;
}

export function Home(){
    const [movieList, setMovieList] = useState<ListProps[]>([]);

    useEffect(() => {
        const loadAll = async () => {
            const list = await api.getHomeList();
            setMovieList(list);
            console.log(list)
        }

        loadAll();
    }, []);

    return(
        <div className={styles.home}>
            <section>
                {movieList.map((item, key) =>{
                    return (
                        <MovieList
                            key={key}
                            title={item.title}
                            items={item.items}
                        />
                    );
                })}
            </section>
        </div>
    );
}