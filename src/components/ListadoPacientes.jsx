/* eslint-disable react/prop-types */
import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes, setPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mb-5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-sky-700 font-bold">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente 
              key={paciente.id} 
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza añadiendo pacientes{" "}
            <span className="text-sky-700 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
