import { Link } from "react-router-dom";
import "./../styles/Cheatsheet.css";

type Props = {
    id: string;
    title: string;
    description: string;
    content: string;
};

export default function Cheatsheet({ id, title, description }: Props) {
    return (
        <div className="cheatsheet">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/cheatsheet/${id}`} className="button">Ver Cheatsheet</Link>
        </div>
    );
}
