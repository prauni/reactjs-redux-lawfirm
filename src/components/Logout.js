import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component{
	constructor(props){
		super(props)
		const token = localStorage.removeItem("token")
	}	
	render(){
		return (
			<div>
				<h1>This is an Logout.</h1>
				<Link to="/Login">Login</Link>
			</div>
		)
	}
}