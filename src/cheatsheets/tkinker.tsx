const TkinterCheatsheet = () => {
  return (
    <div className="cheatsheet">
      <h2>Tkinter</h2>
      <p>Trucos y consejos para Tkinter:</p>
      <ul>
        <li>Importa Tkinter con <code>import tkinter as tk</code> o <code>from tkinter import ttk</code>.</li>
        <li>Usa <code>tk.Tk()</code> para crear una ventana principal.</li>
        <li>Agrega widgets como <code>Label</code>, <code>Button</code>, <code>Entry</code>, etc., y usa <code>pack()</code>, <code>grid()</code>, o <code>place()</code> para posicionarlos.</li>
        <li>Usa <code>command</code> en botones para manejar eventos.</li>
        <li>Usa <code>ttk.Combobox</code> para desplegables y <code>tk.Checkbutton</code> o <code>tk.Radiobutton</code> para opciones seleccionables.</li>
        <li>Agrega barras de desplazamiento con <code>tk.Scrollbar</code> y vincúlalas a widgets como <code>Text</code>.</li>
        <li>Ejecuta la aplicación con <code>root.mainloop()</code>.</li>
      </ul>
    </div>
  );
};

export default TkinterCheatsheet;
