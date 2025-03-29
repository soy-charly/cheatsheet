const GitCheatsheet = () => {
    return (
        <div className="cheatsheet">
            <h2>Git</h2>
            <p>Comandos básicos de Git para control de versiones:</p>
            <ul>
                <li>Inicializar un repositorio: <code>git init</code></li>
                <li>Clonar un repositorio: <code>git clone URL_DEL_REPOSITORIO</code></li>
                <li>Añadir y hacer commit: <code>git add .</code> y <code>git commit -m 'Mensaje del commit'</code></li>
                <li>Push al repositorio remoto: <code>git push origin main</code></li>
            </ul>
        </div>
    );
};

export default GitCheatsheet
