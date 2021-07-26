import React from 'react'

const EditarProducto = () => {
	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold text-success'>
							Editar Producto
						</h2>

						<form>
							<div className='form-group'>
								<label>Nombre Producto</label>
								<input
									type='text'
									className='form-control'
									name='nombre'
									placeholder='Nombre Producto'
								/>
							</div>
							<div className='form-group mt-2'>
								<label>Precio Producto</label>
								<input
									type='number'
									className='form-control'
									name='precio'
									placeholder='Precio Producto'
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
