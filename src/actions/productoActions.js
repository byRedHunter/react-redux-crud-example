import Swal from 'sweetalert2'
import clientAxios from '../config/axios'
import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
	COMENZAR_DESCARGA_PRODUCTOS,
	DESCARGA_PRODUCTOS_ERROR,
	DESCARGA_PRODUCTOS_EXITO,
} from '../types'

// crear nuevos productos
export function crearNuevoProductoAction(producto) {
	return async (dispatch) => {
		dispatch(agregarProducto())

		try {
			// insertar en la API
			await clientAxios.post('/productos', producto)
			// si todo sale bien
			dispatch(agregarProductoExito(producto))

			// alerta
			Swal.fire('Que bien!!', 'El producto se agrego correctamente', 'success')
		} catch (error) {
			// si hay error cambiamos state
			dispatch(agregarProductoError(true))

			// alerta de error
			Swal.fire({
				title: 'Que mal!!',
				text: 'Hubo un error al registrar',
				icon: 'error',
			})
		}
	}
}

const agregarProducto = () => ({
	type: AGREGAR_PRODUCTO,
	payload: true,
})

// si el producto se guarda en la db
const agregarProductoExito = (producto) => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto,
})

// si hubo algun error
const agregarProductoError = (state) => ({
	type: AGREGAR_PRODUCTO_ERROR,
	payload: state,
})

// obtener productos de la DB
export function obtenerProductosAction() {
	return async (dispatch) => {
		dispatch(descargarProductos())

		try {
			const response = await clientAxios.get('/productos')
			dispatch(descargaProductosExitosa(response.data))
		} catch (error) {
			console.log(error.response)
			dispatch(descargaProductosError())
		}
	}
}
const descargarProductos = () => ({
	type: COMENZAR_DESCARGA_PRODUCTOS,
	payload: true,
})
const descargaProductosExitosa = (productos) => ({
	type: DESCARGA_PRODUCTOS_EXITO,
	payload: productos,
})
const descargaProductosError = () => ({
	type: DESCARGA_PRODUCTOS_ERROR,
	payload: true,
})
