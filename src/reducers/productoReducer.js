import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
	COMENZAR_DESCARGA_PRODUCTOS,
	DESCARGA_PRODUCTOS_ERROR,
	DESCARGA_PRODUCTOS_EXITO,
} from '../types'

// cada reducer tiene su propio state
const initialState = {
	productos: [],
	error: false,
	loading: false,
}

export default function productoReducer(state = initialState, action) {
	switch (action.type) {
		case AGREGAR_PRODUCTO:
		case COMENZAR_DESCARGA_PRODUCTOS:
			return {
				...state,
				loading: action.payload,
			}

		case AGREGAR_PRODUCTO_EXITO:
			return {
				...state,
				loading: false,
				error: false,
				productos: [...state.productos, action.payload],
			}

		case AGREGAR_PRODUCTO_ERROR:
		case DESCARGA_PRODUCTOS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		case DESCARGA_PRODUCTOS_EXITO:
			return {
				...state,
				loading: false,
				error: false,
				productos: [...action.payload],
			}

		default:
			return state
	}
}
