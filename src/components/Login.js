import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import $ from 'jquery';

export default class Login extends Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}

		this.state = {
			username:'X',
			password:'Y',
			loggedIn
		}
		this.onChange 	= this.onChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}
	
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	
	submitForm(e){
		e.preventDefault()
		const  { username, password } = this.state
		
		if(username === "X" && password === "Y"){
			localStorage.setItem("token","helloworld")
			this.setState({
				loggedIn:true
			})
		}
		
		
		
	}
	
	render(){
		if(this.state.loggedIn){
			return <Redirect to="/Admin" />
		}
			
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.submitForm}>
					<input name="username" value={this.state.username} onChange={this.onChange} type="text" placeholder="Username" /> <br />
					<input name="password" value={this.state.password} onChange={this.onChange} type="text" placeholder="Password" /> <br />
					<input type="submit" value="Login" />
				</form>
			</div>
		)
	}
}