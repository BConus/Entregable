
/* GENERAR TABLA CON LOS ENCABEZADOS */
export const Tabla = ({ info, delData }) => {
    const eliminar = (item) => {
        //filter sirve para filtrar en un arreglo, && ampersand significa "y" / "and" 
        delData(info.filter((i)=> i.id != item.id && i.error != item.error))
    }

    return (
        <>
            <div className="row">
                {/* map sirve para recorrer el arreglo de datos que vienen en info  */}
                {info.map((item, index) => (
                    <div className="col-3 mb-4" key={index}>
                        <div className="card">
                            <div className="card-header">
                                {item.nombre}
                                <button type="button" className="btn-close" aria-label="Close"
                                    onClick={() => eliminar(item)}></button>
                            </div>                           
                            <div className="card-header">
                                
                                <div>{"ID: "+ item.id}</div>
                                <div>{"Comentario: "+ item.error}</div>
                            </div>
            
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}