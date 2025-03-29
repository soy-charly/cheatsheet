const ReactCheatsheet = () => {
    return (
        <div className="cheatsheet">
            <h2>React</h2>
            <p>Trucos y consejos para React:</p>
            <ul>
                <li>Usa <code>useState</code> y <code>useEffect</code> para manejar el estado y los efectos.</li>
                <li>Evita pasar props innecesarias a componentes.</li>
                <li>Usa <code>React.memo</code> para optimizar componentes funcionales.</li>
            </ul>
        </div>
    );
};

export default ReactCheatsheet;
