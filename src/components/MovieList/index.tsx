import styles from './styles.module.scss';

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
    return(
        <div className={styles.movieList}>
            <h2>{title}</h2>
            <div className={styles.wrapper}>
                <div className={styles.containerMovieList}>
                    {items.results.length &&
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