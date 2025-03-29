import { useParams } from "react-router-dom";
import { loadCheatsheets } from "../utils/loadCheatsheets";
import Navbar from "../components/Navbar";
import "./../styles/CheatsheetPage.css";

export default function CheatsheetPage() {
    const { id } = useParams(); // Obtenemos el ID desde la URL
    const cheatsheets = loadCheatsheets();
    const cheatsheet = cheatsheets.find((c) => c.id === id);

    if (!cheatsheet) {
        return <h2>Cheatsheet no encontrado</h2>;
    }

    return (
        <div className="cheatsheet-page">
            <Navbar />
            <div className="cheatsheet-content">
                <h1>{cheatsheet.title}</h1>
                {cheatsheet.content} {/* Aquí se muestra el contenido */}
            </div>
        </div>
    );
}
