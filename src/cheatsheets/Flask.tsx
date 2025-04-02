const FlaskCheatsheet = () => {
    return (
        <div className="cheatsheet">
            <h2>Flask</h2>
            <p>Comandos y snippets básicos para desarrollar con Flask:</p>
            <ul>
                <li>Instalar Flask: <code>pip install flask</code></li>
                <li>Crear una app básica:  
                    <pre><code>
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "¡Hola, Flask!"

if __name__ == '__main__':
    app.run(debug=True)
                    </code></pre>
                </li>
                <li>Ejecutar la aplicación: <code>python app.py</code></li>
                <li>Definir una ruta con parámetros:  
                    <pre><code>
@app.route('/user/&lt;name&gt;')
def user(name):
    return f"Hola, {name}!"
                    </code></pre>
                </li>
                <li>Devolver JSON en una ruta:  
                    <pre><code>
from flask import jsonify

@app.route('/api/data')
def get_data():
    return jsonify({"mensaje": "Hola, Flask!", "status": "success"})
                    </code></pre>
                </li>
                <li>Usar templates con Jinja2:  
                    <pre><code>
from flask import render_template

@app.route('/hello/&lt;name&gt;')
def hello(name):
    return render_template('hello.html', name=name)
                    </code></pre>
                </li>
                <li>Manejar formularios con Flask:  
                    <pre><code>
from flask import request

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    return f"Usuario: {username}, Contraseña: {password}"
                    </code></pre>
                </li>
            </ul>
        </div>
    );
};

export default FlaskCheatsheet;
