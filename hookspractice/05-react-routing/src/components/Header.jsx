import { NavLink } from "react-router-dom";


function Header() {
    return (
        <div className="flex flex-row justify-evenly py-2 px-10 border border-red-400 m-2 rounded-md bg-slate-100">

            <li className="list-none">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${isActive ? "text-red-500" : "text-slate-500"}  text-xl font-bold`
                    }
                > 
                    Home</NavLink>
            </li>
            <li className="list-none">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `${isActive ? "text-red-500" : "text-slate-500"}  text-xl font-bold`
                    }
                >
                    About</NavLink></li>
            <li className="list-none">Services</li>
            <li className="list-none">Contact-us</li>

        </div>
    )
}
export default Header;