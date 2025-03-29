import { Cheatsheet } from "../types/Cheatsheet";
import { Link } from "react-router-dom";
import "./../styles/CheatsheetList.css";

interface Props {
    cheatsheets: Cheatsheet[];
}

export default function CheatsheetList({ cheatsheets }: Props) {
    return (
        <div className="cheatsheet-list">
            {cheatsheets.map((cheat) => (
                <div key={cheat.id} className="cheatsheet-item">
                    <h2>{cheat.title}</h2>
                    <p>{cheat.description}</p>
                    <Link to={`/cheatsheet/${cheat.id}`} className="cheatsheet-link">
                        Ver más
                    </Link>
                </div>
            ))}
        </div>
    );
}
