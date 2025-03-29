import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadCheatsheets } from "../utils/loadCheatsheets";
import Navbar from "../components/Navbar";
import { Cheatsheet } from "../types/Cheatsheet";
import "./../styles/AllCheatsheets.css";

export default function AllCheatsheets() {
    const [cheatsheets, setCheatsheets] = useState<Cheatsheet[]>([]);

    useEffect(() => {
        setCheatsheets(loadCheatsheets());
    }, []);

    return (
        <div className="all-cheatsheets">
            <Navbar />
            <div className="cheatsheet-list">
                {cheatsheets.map((cheatsheet) => (
                    <div key={cheatsheet.id} className="cheatsheet-preview">
                        <h2>{cheatsheet.title}</h2>
                        <p>{cheatsheet.description}</p>
                        <Link to={`/cheatsheet/${cheatsheet.id}`}>
                            <button>Ver Cheatsheet</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
