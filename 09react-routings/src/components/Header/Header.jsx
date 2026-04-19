
import { Link, NavLink } from "react-router-dom"


export default function Header() {
  return (
    <header className="flex justify-center items-center py-5 px-80 bg-gray-800 h-14">
      <div className="">
        <ul className="text-xl font-semibold text-slate-50 flex space-x-10">
          <li>
            <NavLink to=""
              className={({ isActive }) =>
                ` ${isActive ? "text-orange-400" : "text-gray-100"} `
              }>
              Home
            </NavLink>
          </li>
          <li><NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400" : "text-gray-100"}`
            }
          >
            About
          </NavLink></li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive?"text-orange-400":"text-gray-100"}`
            }>

              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}