import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold">Counter - ToolKit</h1>

                <nav>
                    <ul className="flex gap-8 font-semibold text-slate-600">

                        <Link to="/">
                            <li className="m-5 border px-6">
                                Home
                            </li>
                        </Link>

                        <Link to="/input" >
                            <li className="m-5 border px-6">
                                Input
                            </li>
                        </Link>

                        <Link to="/notes">
                            <li className="m-5 border px-6">
                                Notes
                            </li>
                        </Link>

                        <Link to="/register">
                            <li className="m-5 border px-6">
                                Register
                            </li>
                        </Link>
                        
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;