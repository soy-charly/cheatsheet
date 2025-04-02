import "./../styles/Cheatsheet.css";

const PythonCheatsheet = () => {
    return (
        <div className="cheatsheet">
            <div>Ejemplos básicos de Python para principiantes:</div>
            <ul>
                <li>
                    <strong>Variables:</strong>
                    <pre>
                        <code>x = 10{'\n'}y = 'Hola'{'\n'}z = 3.14</code>
                    </pre>
                </li>
                <li>
                    <strong>Funciones:</strong>
                    <pre>
                        <code>def suma(a, b):{'\n'}    return a + b</code>
                    </pre>
                </li>
                <li>
                    <strong>Bucles:</strong>
                    <pre>
                        <code>for i in range(5):{'\n'}    print(i){'\n'}{'\n'}while {'x > 0:'}{'\n'}    x -= 1</code>
                    </pre>
                </li>
            </ul>
        </div>
    );
};

export default PythonCheatsheet;
