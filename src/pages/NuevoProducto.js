import React from 'react'
import { useState } from 'react'
// useDispatch -> para llamar funciones
// useSelector -> para acceder al estado
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// action redux
import { crearNuevoProductoAction } from '../actions/productoActions'

const NuevoProducto = () => {
	const history = useHistory()
	// state del componente
	const [nombre, setNombre] = useState('')
	const [precio, setPrecio] = useState(0)

	// usamos dispatch y crea una funcion
	const dispatch = useDispatch()
	// acceder al state del store
	const { loading, error } = useSelector((state) => state.productos)

	// mandamos a llamar el action de productoAction
	const agregarProducto = (producto) =>
		dispatch(crearNuevoProductoAction(producto))

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar formulario
		if (nombre.trim() === '' || precio <= 0) {
			return
		}

		// si no hay errores

		// crear el nuevo producto
		agregarProducto({ nombre, precio })
		history.push('/')
	}

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold text-success'>
							Agregar Nuevo Producto
						</h2>

						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label>Nombre Producto</label>
								<input
									type='text'
									className='form-control'
									name='nombre'
									placeholder='Nombre Producto'
									value={nombre}
									onChange={({ target }) => setNombre(target.value)}
								/>
							</div>
							<div className='form-group mt-2'>
								<label>Precio Producto</label>
								<input
									type='number'
									className='form-control'
									name='precio'
									placeholder='Precio Producto'
									value={precio}
									onChange={({ target }) => setPrecio(Number(target.value))}
								/>
							</div>

							<button
								type='submit'
								className='btn btn-primary font-weight-bold mt-4 d-block w-100'
							>
								{loading ? 'Cargando...' : 'Agregar'}
							</button>

							{error && (
								<p className='alert alert-danger text-center py-2 mt-5'>
									Hubo un error inesperado
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NuevoProducto
