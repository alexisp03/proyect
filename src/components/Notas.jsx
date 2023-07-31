import { useState } from "react";
import "../style/Notas.css";
import Ventana from "./Ventana";

function Notas({
  titulo,
  descripcion,
  controlarEliminar,
  id,
  completada,
  cambiarvalor,
  setNuevoTitulo,
  nuevoTitulo,
  controlarcambio,
  nuevadescripcion,
  setNuevadescripcion,
}) {
  const [controlVentana, setControlVentana] = useState(false);

  return (
    <>
      <div className="containerNota">
        <p className="parrafoNota">ID: {id}</p>
        <p className="parrafoNota">Titulo:{titulo}</p>
        <p className="parrafoNota">Descripcion:{descripcion}</p>
        <div
          style={{ backgroundColor: completada == true ? "green" : "red" }}
          className="inputCheck"
          onClick={cambiarvalor}
        >
          {completada == true ? "Tarea Completa" : "Tarea Incompleta"}
        </div>
        <br />
        <button className="botonEliminar" onClick={controlarEliminar}>
          Eliminar
        </button>
        <button
          className="botonEditar"
          onClick={() => setControlVentana(!controlVentana)}
        >
          Editar
        </button>
      </div>
      <Ventana
        mostrarVentana={controlVentana}
        cerrarventana={setControlVentana}
        nuevoTitulo={nuevoTitulo}
        setNuevoTitulo={setNuevoTitulo}
        controlarcambio={controlarcambio}
        setNuevadescripcion={setNuevadescripcion}
        nuevadescripcion={nuevadescripcion}
      />
    </>
  );
}

export default Notas;
