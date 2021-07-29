import Swal from 'sweetalert2'
import clientAxios from '../config/axios'
import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
	COMENZAR_DESCARGA_PRODUCTOS,
	COMENZAR_EDICION_PRODUCTO,
	DESCARGA_PRODUCTOS_ERROR,
	DESCARGA_PRODUCTOS_EXITO,
	OBTENER_PRODUCTO_EDITAR,
	OBTENER_PRODUCTO_ELIMINAR,
	PRODUCTO_EDITADO_ERROR,
	PRODUCTO_EDITADO_EXITO,
	PRODUCTO_ELIMINADO_ERROR,
	PRODUCTO_ELIMINADO_EXITO,
} from '../types'

// crear nuevos productos
export function crearNuevoProductoAction(producto) {
	return async (dispatch) => {
		dispatch(agregarProducto())

		try {
			// insertar en la API
			const result = await clientAxios.post('/productos', producto)
			// si todo sale bien
			dispatch(agregarProductoExito(result.data))

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

// selecciona y elimina el producto
export function borrarProductoAction(id) {
	return async (dispatch) => {
		dispatch(obtenerProductoEliminar(id))

		try {
			await clientAxios.delete(`/productos/${id}`)
			dispatch(eliminarProductoExito())

			// si se elimina
			Swal.fire('Eliminado!!', 'El producto se ha elimino', 'success')
		} catch (error) {
			dispatch(eliminarProductoError())
		}
	}
}
const obtenerProductoEliminar = (id) => ({
	type: OBTENER_PRODUCTO_ELIMINAR,
	payload: id,
})
const eliminarProductoExito = () => ({
	type: PRODUCTO_ELIMINADO_EXITO,
})
const eliminarProductoError = () => ({
	type: PRODUCTO_ELIMINADO_ERROR,
	payload: true,
})

// colocar producto en edicion
export function obtenerProductoEditar(producto) {
	return (dispatch) => {
		dispatch(obtenerProductoEditarAction(producto))
	}
}
const obtenerProductoEditarAction = (producto) => ({
	type: OBTENER_PRODUCTO_EDITAR,
	payload: producto,
})

// edita un registro en la api y state
export function editarProductoAction(producto) {
	return async (dispatch) => {
		dispatch(editarProducto(producto))

		try {
			await clientAxios.put(`/productos/${producto.id}`, producto)
			dispatch(editarProductoExito(producto))
		} catch (error) {
			dispatch(editarProductoError())
		}
	}
}
const editarProducto = () => ({
	type: COMENZAR_EDICION_PRODUCTO,
})
const editarProductoExito = (producto) => ({
	type: PRODUCTO_EDITADO_EXITO,
	payload: producto,
})
const editarProductoError = () => ({
	type: PRODUCTO_EDITADO_ERROR,
	payload: true,
})
