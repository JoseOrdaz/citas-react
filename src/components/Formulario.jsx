import { useState, useEffect } from "react"


const Formulario = () => {
    
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //Validando el formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')){

            setError(true)
            return;

        } 

        setError(false)
    }

  return (

    <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {" "}
    <span className=" text-sky-600 font-bold">administralos</span>
    </p>

    <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 font-bold">
            {error && (
            <div className="bg-red-800 text-white uppercase p-3 mb-3 rounded-lg text-center">
                <p>Todos los campos son obligatorios</p>
            </div>)}

        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                Nombre Mascota</label>
            <input 
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={nombre}
            onChange={(e) =>setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                Nombre Propietario/a</label>
            <input type="text"
            id="propietario"
            placeholder="Nombre del propietario/a"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={propietario}
            onChange={(e) =>setPropietario(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email</label>
            <input type="email"
            id="email"
            placeholder="Email contacto"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            />
        </div>    
        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                Alta</label>
            <input type="date"
            id="alta"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            value={fecha}
            onChange={(e) =>setFecha(e.target.value)}
            />
        </div>    
        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                Sintomas</label>
            <textarea 
            id="sintomas"
            className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
            placeholder="Describir los sintomas"
            value={sintomas}
            onChange={(e) =>setSintomas(e.target.value)}

            />
        </div>  
        <input 
        type="submit"
        className="bg-sky-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-sky-700 cursor-pointer transition-all"
        value="Agregar paciente"
        />  
    </form>
    </div>
  )
}

export default Formulario