import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CheatsheetList from "../components/CheatsheetList";
import { loadCheatsheets } from "../utils/loadCheatsheets";
import { Cheatsheet } from "../types/Cheatsheet";
import "./../styles/Home.css";

export default function Home() {
    const [cheatsheets, setCheatsheets] = useState<Cheatsheet[]>([]);
    const [filtered, setFiltered] = useState<Cheatsheet[]>([]);

    useEffect(() => {
        const data: Cheatsheet[] = loadCheatsheets();
        setCheatsheets(data);
        setFiltered(data);
    }, []);

    return (
        <div className="home">
            <Navbar onSearch={(query) => {
                setFiltered(
                    cheatsheets.filter(cheat =>
                        cheat.title.toLowerCase().includes(query.toLowerCase())
                    )
                );
            }} />
            <CheatsheetList cheatsheets={filtered} />
        </div>
    );
}
