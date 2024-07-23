import { useState } from "react"
//addNew es un función que se pasa como props desde indexApp y se ejecuta en el evento click
export const Formulario = ({ addNew }) => {
    const valoresIniciales = {
        nombre: '',
        error: '',
        id:''
    }
    //useState sirve para manejar los estados de un componente
    //pasamos a un state los valores del formulario
    const [valores, setValores] = useState(valoresIniciales)
    //asignar a un objeto todos los valores del formulario
    const { nombre, error, id } = valores
    //función inputChange 
    const cambioInput = (e) => {
        //... operador spread
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    const guardar = () => {
        //utilizamos la función para guardar los datos
        addNew(valores)
        //vuelve los inputs a su estado inicial, es decir, sin texto
        setValores(valoresIniciales)
    }
    return (
        <>
            {/* NOMBRE, APELLIDO, EMAIL, PROBLEMA  */}
            <form className="card bg-danger">
                <div className="card-body">
                    <div>
                        <label>Nick Name</label>
                        <input
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={cambioInput}
                            className="form-control" />
                    </div>
                    <div>
                        <label>ID</label>
                        <input
                            type="text"
                            name="id"
                            value={id}
                            onChange={cambioInput}
                            className="form-control" />
                    </div>
                    <div>
                        <label>Desea agregar algun comentario</label>
                        <textarea
                            rows="5"
                            name="error"
                            value={error}
                            onChange={cambioInput}
                            className="form-control" ></textarea>
                    </div>
                </div>
                <div className="card-footer text-end">
                    <input
                        type="button"
                        value="Agregar"
                        onClick={guardar}
                        className="btn btn-primary" />
                </div>
            </form>
        </>
    )
}