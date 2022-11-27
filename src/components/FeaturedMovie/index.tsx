import { ImPlay3 } from 'react-icons/im';
import { MdInfoOutline } from 'react-icons/md';

import styles from './styles.module.scss';

type GenresType = {
    id: number;
    name: string;
}

type MovieArray = {
    id: number;
    original_name: string;
    backdrop_path: string;
    vote_average: number;
    number_of_seasons: number;
    overview: string;
    first_air_date: number;
    genres: GenresType[];
}

type MovieProps = {
    items: MovieArray
}

export function FeatureMovie({ items }: MovieProps){

    const firstDate = new Date(items.first_air_date);
    let genres = [];
    for(let i in items.genres){
        genres.push(items.genres[i].name);
    }

    return(
        <section className={styles.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${items.backdrop_path})`
        }}>
            <div className={styles.featuredVertical}>
                <div className={styles.featuredHorizontal}>
                    <div className={styles.featuredName}>{items.original_name}</div>
                    <div className={styles.featuredInfo}>
                        <div className={styles.featuredPoints}>{items.vote_average} pontos</div>
                        <div className={styles.featuredYear}>{firstDate.getFullYear()}</div>
                        <div className={styles.featuredSeasons}>{items.number_of_seasons} temporada
                            {
                                items.number_of_seasons !== 1 ? 's' : ''
                            }
                        </div>
                    </div>
                    <div className={styles.featuredDescription}>{items.overview}</div>
                    <div className={styles.featuredButtons}>
                        <a href="/home" className={styles.featuredWatchButton}><ImPlay3 size={'30px'}/> Assistir</a>
                        <a href="/home" className={styles.featuredInfoButton}><MdInfoOutline size={'30px'}/> Mais informações</a>
                    </div>
                    <div className={styles.featuredGenres}>
                            <strong>Gêneros: </strong>{genres.join(', ')}.
                    </div>
                </div>
            </div>
        </section>
    );
}