import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import {
	borrarProductoAction,
	obtenerProductoEditar,
} from '../actions/productoActions'

const Producto = ({ producto }) => {
	const { id, nombre, precio } = producto

	const dispatch = useDispatch()
	const history = useHistory()

	// confirmar si desea eliminar
	const confirmarEliminarProducto = (id) => {
		// preguntar al usuario
		Swal.fire({
			title: '¿Estas seguro?',
			text: '¿Estas seguro de eliminar?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.value) {
				// pasar el action
				dispatch(borrarProductoAction(id))
			}
		})
	}

	// redirige de forma programada
	const redireccionarEdicion = (producto) => {
		dispatch(obtenerProductoEditar(producto))
		history.push(`/productos/editar/${producto.id}`)
	}

	return (
		<tr>
			<th>{nombre}</th>
			<th>
				<span className='font-weight-bold'>$ {precio}</span>
			</th>
			<th className='acciones'>
				<div className='btn-group'>
					<button
						type='button'
						onClick={() => redireccionarEdicion(producto)}
						className='btn btn-primary'
					>
						Editar
					</button>
					<button
						type='button'
						className='btn btn-danger'
						onClick={() => confirmarEliminarProducto(id)}
					>
						Eliminar
					</button>
				</div>
			</th>
		</tr>
	)
}

export default Producto
