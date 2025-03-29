import { useState } from "react";
import "./../styles/SearchBar.css";

type Props = {
    onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState("");

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Buscar cheatsheet..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    onSearch(e.target.value);
                }}
            />
        </div>
    );
}
