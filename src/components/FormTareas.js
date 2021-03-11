import React, { useState } from "react";

const FormTareas = () => {
  //aqui escribo codigo de js
  //crear un state
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  /*const guardarTarea = (e) => {
    setTarea(e.target.value);
  };*/
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('prueba');
    let arreglo=tareas;
    arreglo.push(tarea);
    //actulaizar el state de la lista de tareas
    setTarea(arreglo);
  }
  return (
    <div className="container my-5 d-flex justify-content-center">
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Agregar una tarea"
            onChange={(e)=>setTarea(e.target.value)}
          />
          <button className="btn btn-outline" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTareas;
