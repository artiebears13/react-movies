export const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    const placeholder = "https://placehold.co/600x400?text=no+data"

    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === "N/A" ? (
                        <img className="activator" src={placeholder} alt="" />
                    ) : (
                            <img className="activator" src={poster} alt={""}/>
                        )
                }

            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year} <span className={"right"}>{type}</span></p>
            </div>

        </div>
    )
}