import {Movie} from "./Movie";

export const Movies = (props) => {
    const {movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? movies.map((movie) => (
                <Movie key={movie.imdbID} {...movie}/>
            )):
            <h3>No movies found</h3>}
        </div>
    )
}