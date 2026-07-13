import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold">Counter-ToolKit</h1>

                <nav>
                    <ul className="flex gap-8">
                        <li>
                            <Link to="/" className="hover:text-gray-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/input" className="hover:text-gray-500">
                                Input
                            </Link>
                        </li>
                        <li>
                            <Link to="/notes" className="hover:text-gray-500">
                                Notes
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;