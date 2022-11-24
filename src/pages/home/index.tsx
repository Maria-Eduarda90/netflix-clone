import { useEffect, useState } from 'react';
import api from '../../api/api';
import { MovieList } from '../../components/MovieList';

import styles from './styles.module.scss';

export interface MovieProps {
    id: number;
    overview: string;
    poster_path: string;
    original_title: string;
}

interface ListProps {
    title: string;
    slug: string;
    items: MovieProps[];
}

export function Home(){
    const [movieList, setMovieList] = useState<ListProps[]>([]);
    console.log('list: ', movieList);

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