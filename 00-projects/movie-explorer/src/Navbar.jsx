import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="bg-amber-400 my-2 py-3 px-2 ">
            <Link to="/" className="text-cyan-950 font-bold ">Home</Link>
            <Link to="/movies">Movie</Link>
            <Link to="/favorite">Favorite</Link>
        </nav>

    )
}

export default Navbar;
