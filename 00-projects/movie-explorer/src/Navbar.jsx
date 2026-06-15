import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
            <Link to="/favorite">Favorite</Link>
        </nav>

    )
}

export default Navbar;
