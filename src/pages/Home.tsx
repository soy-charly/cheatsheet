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
            <br />
            <div className="introduction">
                <h1>Welcome to the Cheatsheet App</h1>
                <br />
                <p>Find and manage your favorite cheatsheets easily.</p>
                <p>Use the search bar above to quickly locate specific cheatsheets or browse through the list below to explore all available resources.</p>
                <p>Stay organized and boost your productivity with our comprehensive collection of cheatsheets tailored for developers.</p>
                <br />
            </div>
            <CheatsheetList cheatsheets={filtered} />
        </div>
    );
}
