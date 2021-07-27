import React from 'react'
import { Link } from 'react-router-dom'

const Producto = ({ producto }) => {
	const { id, nombre, precio } = producto

	return (
		<tr>
			<th>{nombre}</th>
			<th>
				<span className='font-weight-bold'>$ {precio}</span>
			</th>
			<th className='acciones'>
				<div className='btn-group'>
					<Link to={`/productos/editar/${id}`} className='btn btn-primary'>
						Editar
					</Link>
					<button type='button' className='btn btn-danger'>
						Eliminar
					</button>
				</div>
			</th>
		</tr>
	)
}

export default Producto
