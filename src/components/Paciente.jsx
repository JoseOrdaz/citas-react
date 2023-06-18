/* eslint-disable react/prop-types */

const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {
    
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }



    }


  return (
    <div className="mt-10 bg-white shadow-md mx-3 px-5 py-10 rounded-lg">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{" "}
         <span className=" font-normal normal-case">{nombre}</span>
     </p> 
     <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{" "}
         <span className=" font-normal normal-case">{propietario}</span>
     </p> 
     <p className="font-bold mb-3 text-gray-700 uppercase">Email:{" "}
         <span className=" font-normal normal-case">{email}</span>
     </p> 
     <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{" "}
         <span className=" font-normal normal-case">{fecha}</span>
     </p> 
     <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{" "}
         <span className=" font-normal normal-case">{sintomas}</span>
     </p> 

     <div className="flex justify-between mt-10">
        <button 
        type="button"
        onClick={() => setPaciente(paciente)}
        className="py-2 px-10 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg uppercase">
            Editar
        </button>
        <button 
        type="button"
        onClick={handleEliminar}
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase">
            Eliminar
        </button>
     </div>
  
 </div>
  )
}

export default Paciente