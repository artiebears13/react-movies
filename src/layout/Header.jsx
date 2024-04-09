export const Header = () => {
    return (
        <div>
            <nav className={"green darken-1"}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo left">React Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://localhost:3000">Repo</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}