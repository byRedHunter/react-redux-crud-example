import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container'>
				<h1>
					<Link to='/' className='navbar-brand text-success'>
						CRUD
					</Link>
				</h1>

				<Link to='/productos/nuevo' className='btn btn-danger nuevo-post'>
					Agregar Producto &#43;
				</Link>
			</div>
		</nav>
	)
}

export default Header
