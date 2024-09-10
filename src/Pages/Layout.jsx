	import React from 'react'
	import Navbar from '../Outlets/Navbar'
	import Footer from '../Outlets/Footer'
	import { Outlet } from 'react-router-dom'
	import '../Outlets/Layout.css'


	const Layout = () => {
		return (
			<div>
					<Navbar/>
						<Outlet/>
					<Footer/>
			</div>
		)
	}

	export default Layout