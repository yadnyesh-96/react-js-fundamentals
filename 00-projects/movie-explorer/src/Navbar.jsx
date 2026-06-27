import { Link, NavLink } from "react-router-dom";


function Navbar() {
    return (
        <nav className="my-2 py-3 px-2 ps-5 flex justify-center-safe gap-10">
            <NavLink
                to="/"
                className= {({ isActive }) => isActive ? "font-bold text-cyan-950" : "font-normal text-cyan-950"  
                }>
                Home
            </NavLink>

            <NavLink
                to="/movies"
                className={({ isActive }) => isActive ? "font-bold text-cyan-950" : "font-normal text-cyan-950"
                }>
                Movies
            </NavLink>

            <NavLink
                to="/favorite"
                className={({ isActive }) => isActive ? "font-bold text-cyan-950" : "font-normal text-cyan-950"
                }>
                Favorites
            </NavLink>

        </nav>

    )
}

export default Navbar;
