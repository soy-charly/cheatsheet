import "./../styles/Cheatsheet.css";

const JavaScript = () => {
    return (
        <div className="cheatsheet">
            <div>Aquí van algunos trucos de JavaScript:</div>
            <ul>
                <li>Usa <code>let</code> y <code>const</code> en lugar de <code>var</code>.</li>
                <li>Evita los <code>eval()</code>por seguridad.</li>
                <li>Usa funciones de flecha <code>{'=>'}</code> para una sintaxis más concisa.</li>
            </ul>
        </div>
    );
};

export default JavaScript;
