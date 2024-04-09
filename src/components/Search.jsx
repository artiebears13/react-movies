import React from 'react';

export class Search extends React.Component {

    state = {
        search: '',
        type: 'all',
    }


    handleChange = event => {
        this.setState(() =>( {[event.target.name]: event.target.value}),
            () => {
            if (event.target.name === 'type') {
                this.props.searchMovies(this.state.search, this.state.type);
            }
            });

    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    render() {

        const type = this.state.type;
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        name="search"
                        type="search"
                        className="validate"
                        placeholder="Search Movies"
                        value={this.state.search}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                    >
                        Search
                    </button>
                    <p className="type-radio">
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="all"
                                onChange={this.handleChange}
                                checked={type === "all"}
                            /> <span>All</span>
                        </label>
                    </p>
                    <p className={"type-radio"}>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="movie"
                                onChange={this.handleChange}
                                checked={type === "movie"}
                            /> <span>Movie</span>
                        </label>
                    </p>
                    <p className={"type-radio"}>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="series"
                                onChange={this.handleChange}
                                checked={type === "series"}
                            /> <span>Series</span>
                        </label>
                    </p>
                </div>
            </div>
        )
    }
}