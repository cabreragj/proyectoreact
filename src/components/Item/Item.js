import { Link } from "react-router-dom"

export const Item = ( {item} ) => {

    return (
        <div className='col-3 m-2'>
            <h2>{item.nombre}</h2>
            <img src={item.img}/>
            <p>{item.marca}</p>
            <p>Precio: ${item.precio}</p>
            <p><small>Categoría: {item.tipo}</small></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}