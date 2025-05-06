import "./../styles/Cheatsheet.css";

const MySQLCheatsheet = () => {
    return (
        <div className="cheatsheet">
            <div>Comandos y snippets básicos para conectar y usar MySQL en Python:</div>
            <ul>
                <li>Instalar el conector de MySQL:
                    <code>pip install mysql-connector-python</code>
                </li>
                <li>Conectar a la base de datos:
                    <pre><code>{`import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="tu_usuario",
    password="tu_contraseña",
    database="nombre_base"
)
cursor = conn.cursor()`}</code></pre>
                </li>
                <li>Crear una tabla:
                    <pre><code>{`cursor.execute("""
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
)
""")`}</code></pre>
                </li>
                <li>Insertar datos:
                    <pre><code>{`sql = "INSERT INTO usuarios (nombre, email) VALUES (%s, %s)"
val = ("Juan", "juan@example.com")
cursor.execute(sql, val)
conn.commit()`}</code></pre>
                </li>
                <li>Leer datos:
                    <pre><code>{`cursor.execute("SELECT * FROM usuarios")
for fila in cursor.fetchall():
    print(fila)`}</code></pre>
                </li>
                <li>Actualizar registros:
                    <pre><code>{`sql = "UPDATE usuarios SET email = %s WHERE nombre = %s"
val = ("nuevo@mail.com", "Juan")
cursor.execute(sql, val)
conn.commit()`}</code></pre>
                </li>
                <li>Eliminar registros:
                    <pre><code>{`sql = "DELETE FROM usuarios WHERE nombre = %s"
val = ("Juan",)
cursor.execute(sql, val)
conn.commit()`}</code></pre>
                </li>
                <li>Cerrar conexión:
                    <pre><code>{`cursor.close()
conn.close()`}</code></pre>
                </li>
            </ul>
        </div>
    );
};

export default MySQLCheatsheet;
