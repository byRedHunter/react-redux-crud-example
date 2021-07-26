import React from 'react'

const Productos = () => {
	return (
		<>
			<h2 className='mb-4'>Listado de Productos</h2>

			<table className='table table-striped'>
				<thead className='table-danger'>
					<tr>
						<th scope='col'>Nombre</th>
						<th scope='col'>Precio</th>
						<th scope='col'>Acciones</th>
					</tr>
				</thead>
			</table>
		</>
	)
}

export default Productos
