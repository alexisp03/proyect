import { useState } from "react";
import "./App.css";
import Notas from "./components/Notas";

function App() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [notas, setNotas] = useState([]);
  const [valorinput, setvalorinput] = useState(false);
  const [contadorid, setContadorid] = useState(1);
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevadescripcion, setNuevadescripcion] = useState("");

  const controlFormulario = (e) => {
    e.preventDefault();
    setDescripcion("");
    setTitulo("");
  };

  const agregarNota = () => {
    const newNota = {
      titulo: titulo,
      descripcion: descripcion,
      completada: valorinput,
      id: contadorid,
    };
    if (titulo.trim() !== "" && descripcion.trim() !== "") {
      setNotas([...notas, newNota]);
      setContadorid(contadorid + 1);
    } else {
      alert("Completar todos los recuadros");
    }
  };

  const controlarEliminar = (i) => {
    setNotas(
      notas.filter((nota, index) => {
        return index !== i;
      })
    );
  };

  const completarTodo = () => {
    setvalorinput(
      notas.map((nota) => {
        return (nota.completada = true);
      })
    );
  };

  const cambiarvalor = (i,c) => {
    notas.map((nota, index) => {
      index == i ? nota.completada = !c : "";
      setvalorinput(!valorinput)
    });
  };

  const controlarcambio = (i) => {
    if (nuevoTitulo.trim() !== "") {
      notas.map((nota, index) => {
        if (index == i) {
          nota.titulo = nuevoTitulo;
        }
      });
    }
    if (nuevadescripcion.trim() !== "") {
      notas.map((nota, index) => {
        if (index == i) {
          nota.descripcion = nuevadescripcion;
        }
      });
    }
  };

  return (
    <>
      <div className="containerForm">
        <form onSubmit={controlFormulario} className="Formilario">
          <p className="parrafoForm">Titulo:</p>
          <input
            className="inputForm"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />{" "}
          <br />
          <p className="parrafoForm">Descripcion:</p>
          <textarea
            className="textareaForm"
            cols="31"
            rows="10"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
          <input
            type="submit"
            onClick={agregarNota}
            className="botonAgregar"
            value="Agregar"
          />
        </form>
      </div>
      <div onClick={completarTodo} className="completarTodo">
        Completar todas las tareas
      </div>
      <div className="containerNotas">
        {notas.map((nota, index) => {
          return (
            <Notas
              titulo={nota.titulo}
              key={index}
              id={nota.id}
              descripcion={nota.descripcion}
              controlarEliminar={() => controlarEliminar(index)}
              completada={nota.completada}
              cambiarvalor={() => cambiarvalor(index, nota.completada)}
              nuevoTitulo={nuevoTitulo}
              setNuevoTitulo={setNuevoTitulo}
              controlarcambio={() => controlarcambio(index)}
              nuevadescripcion={nuevadescripcion}
              setNuevadescripcion={setNuevadescripcion}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
