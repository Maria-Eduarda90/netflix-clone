import { useEffect, useState } from 'react';
import api from '../../api/api';
import { FeatureMovie } from '../../components/FeaturedMovie';
import { Header } from '../../components/Header';
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
    const [featuredData, setFeaturedData] = useState<any>();
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            const list = await api.getHomeList();
            setMovieList(list);

            const originals = list.filter(i => i.slug === 'originals');
            const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            const chosen = originals[0].items.results[randomChosen];
            const chosenInfo = await api.getMovieInfo(chosen.id, 'tv');

            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    })

    return(
        <div className={styles.home}>
            <Header black={blackHeader}/>

            {featuredData && 
                <FeatureMovie items={featuredData}/>
            }

            <section className={styles.lists}>
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

            {movieList.length <= 0 && 
                <div className={styles.loading}>
                    <div className={styles.loader}>

                    </div>
                </div>
            }
        </div>
    );
}