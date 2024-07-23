import { useEffect, useState } from "react"
import { Formulario } from "./components/formApp"
import { Tabla } from "./components/tableApp"

const inicial = () => {
    //verifica si existe en la memoría del navegador errores, sino entrega un arreglo vacio
    return JSON.parse(localStorage.getItem('errores')) || []
}

export const IndexApp = () => {
    //useState para el estado de data
    const [data, setData] = useState(inicial)
    //función que permtie agregar un nuevo elemento
    const addData = (valores) => {
        setData([...data, valores])
    }
    //useEffect es un hooks, que se ejecuta cuando se renderiza por primera vez el componente
    //y cuando se actualiza el componente.Lo utilizamos para guardar los datos en el localstorage
    useEffect(() => {
        localStorage.setItem('errores', JSON.stringify(data))
    }, [data])
    //función para eliminar un registro del statedata, viene desde el componente tabla
    const deleteData = (valor) =>{
        setData([...valor])
    }
    return (
        <>
            <div className="bg-danger p-3 text-center text-white">
                <h1>Datos</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="mt-3 col-4">
                        {/* props: addNew nos sirve para enviar la función */}
                        <Formulario addNew={addData} />
                    </div>
                    <div className="mt-3 col-8 bg-warning">
                        {/* llamar el componente tabla  */}
                        <Tabla info={data} delData={deleteData} />
                    </div>
                </div>
            </div>
        </>
    )
} 