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

interface Test {
    results: MovieProps[]
}

interface ListProps {
    title: string;
    slug: string;
    items: Test;
}

export function Home(){
    const [movieList, setMovieList] = useState<ListProps[]>([]);

    useEffect(() => {
        const loadAll = async () => {
            const list = await api.getHomeList();
            setMovieList(list);
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