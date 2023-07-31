import "../style/Ventana.css";

function Ventana({
  mostrarVentana,
  cerrarventana,
  nuevoTitulo,
  setNuevoTitulo,
  controlarcambio,
  setNuevadescripcion,
  nuevadescripcion,
}) {
  const controlarformulario = (e) => {
    e.preventDefault();
    setNuevoTitulo("");
    setNuevadescripcion("");
    cerrarventana(false);
  };

  return (
    <>
      {mostrarVentana && (
        <form className="Overlay" onSubmit={controlarformulario}>
          <div className="containerVentana">
            <p>Titulo:</p>
            <input
              type="text"
              className="ventanaInput"
              value={nuevoTitulo}
              onChange={(e) => setNuevoTitulo(e.target.value)}
            />
            <p>Descripcion:</p>
            <textarea
              type="text"
              className="ventanaTextarea"
              value={nuevadescripcion}
              onChange={(e) => setNuevadescripcion(e.target.value)}
            />
            <div className="botonCerrar" onClick={() => cerrarventana(false)}>
              X
            </div>
            <div className="containerBotton">
              <input
                type="submit"
                value="Guardar"
                className="ventanaBotton"
                onClick={controlarcambio}
              />
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Ventana;
