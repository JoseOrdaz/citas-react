/* eslint-disable react/prop-types */
import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

    <h2 className="font-black text-center text-3xl">ListadoPacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {" "}
        <span className="text-sky-700 font-bold">Pacientes y citas</span>
    </p>


  {pacientes.map((paciente, index) => (
      <Paciente 
      key={index}
      paciente={paciente}
      
      />
  ))}

    
    


    </div>
    
  )
}

export default ListadoPacientes