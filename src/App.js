import Header from './components/Header'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import Productos from './pages/Productos'
import NuevoProducto from './pages/NuevoProducto'
import EditarProducto from './pages/EditarProducto'

// redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Header />

				<div className='container py-5'>
					<Switch>
						<Route exact path='/' component={Productos} />
						<Route path='/productos/nuevo' component={NuevoProducto} />
						<Route path='/productos/editar/:id' component={EditarProducto} />
						<Redirect to='/' />
					</Switch>
				</div>
			</Provider>
		</Router>
	)
}

export default App
