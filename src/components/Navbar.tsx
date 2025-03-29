import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./../styles/Navbar.css";

type Props = {
    onSearch?: (query: string) => void;
};

export default function Navbar({ onSearch }: Props) {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/cheatsheets" className="nav-link">Ver Todos</Link>
            </div>
            {onSearch && <SearchBar onSearch={onSearch} />}
        </nav>
    );
}
