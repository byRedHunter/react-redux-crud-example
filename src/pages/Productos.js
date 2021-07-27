import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'
import Producto from '../components/Producto'

const Productos = () => {
	const dispatch = useDispatch()
	const { productos, loading, error } = useSelector((state) => state.productos)

	useEffect(() => {
		// consultar api
		const cargarProductos = () => dispatch(obtenerProductosAction())
		cargarProductos()
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<h2 className='mb-4'>Listado de Productos</h2>

			{error && (
				<p className='font-weight-bold alert alert-danger text-center'>
					Hubo un error
				</p>
			)}

			<table className='table table-striped'>
				<thead className='table-danger'>
					<tr>
						<th scope='col'>Nombre</th>
						<th scope='col'>Precio</th>
						<th scope='col'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{loading && (
						<tr>
							<th colSpan={3} className='text-center text-error'>
								No hay productos
							</th>
						</tr>
					)}

					{productos.length === 0 ? (
						<tr>
							<th colSpan={3} className='text-center text-error'>
								No hay productos
							</th>
						</tr>
					) : (
						productos.map((producto) => (
							<Producto key={producto.id} producto={producto} />
						))
					)}
				</tbody>
			</table>
		</>
	)
}

export default Productos
