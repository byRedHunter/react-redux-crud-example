import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editarProductoAction } from '../actions/productoActions'

const EditarProducto = () => {
	const history = useHistory()
	// state para producto
	const [producto, setProducto] = useState({ nombre: '', precio: 0 })

	const dispatch = useDispatch()

	const { productoEditar } = useSelector((state) => state.productos)

	useEffect(() => {
		setProducto(productoEditar)
	}, [productoEditar])

	const onChangeForm = ({ target }) => {
		setProducto({ ...producto, [target.name]: target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(editarProductoAction(producto))
		history.push('/')
	}

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold text-success'>
							Editar Producto
						</h2>

						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label>Nombre Producto</label>
								<input
									type='text'
									className='form-control'
									name='nombre'
									placeholder='Nombre Producto'
									value={producto.nombre}
									onChange={onChangeForm}
								/>
							</div>
							<div className='form-group mt-2'>
								<label>Precio Producto</label>
								<input
									type='number'
									className='form-control'
									name='precio'
									placeholder='Precio Producto'
									value={producto.precio}
									onChange={onChangeForm}
								/>
							</div>

							<button
								type='submit'
								className='btn btn-primary font-weight-bold mt-4 d-block w-100'
							>
								Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditarProducto
