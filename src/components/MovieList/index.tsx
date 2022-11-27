import styles from './styles.module.scss';

import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { useState } from 'react';

interface MovieListProps {
    id: number;
    poster_path: string;
    original_title: string;
}

interface Test {
    results: MovieListProps[]
}

interface SectionMoviesProps {
    title: string;
    items: Test;
}

export function MovieList({ title, items }: SectionMoviesProps) {
    const [scrollX, setScrollX] = useState(-400);
    
    function handleLeftArrow() {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    function handleRightArrow() {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className={styles.movieList}>
            <h2>{title}</h2>
            
            <div className={styles.movieListLeft} onClick={handleLeftArrow}>
                <MdArrowBackIos fontSize={50}/>
            </div>

            <div className={styles.movieListRight} onClick={handleRightArrow}>
                <MdArrowForwardIos fontSize={50}/>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.containerMovieList} style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150,
                }}>
                    {items.results &&
                        items.results.map((item, key) => {
                            return (
                                <div key={key} className={styles.movieItem}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                        alt={item.original_title}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}