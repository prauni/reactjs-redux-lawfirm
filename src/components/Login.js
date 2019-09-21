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
		
		
		const formData = new FormData();
		formData.append('prodID',7);
		const apiUrl = 'http://localhost/test.php';
		const options = {
			method:'GET',
			body:formData,
			mode: 'no-cors'
		}

		fetch(apiUrl,options)
			.then(res => res.json())
			.then(
				(result) => {
					console.log('Ajax fetch success.... ')
				},
				(error) =>{
					console.log('Ajax fetch error.... ')
				}				
			)
		/*
		'http://localhost/test.php'
		*/
		$.ajax({
			url:'http://jsonplaceholder.typicode.com/posts',
			success:(data)=>{
				console.log('Ajax success ');
				//console.log(data)
			},
			error:(err)=>{
				console.log('Ajax error ')
			}
		})

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
				<h1>Login Page</h1>
				<form onSubmit={this.submitForm}>
					<input name="username" value={this.state.username} onChange={this.onChange} type="text" placeholder="Username" /> <br />
					<input name="password" value={this.state.password} onChange={this.onChange} type="text" placeholder="Password" /> <br />
					<input type="submit" value="Login" />
				</form>
			</div>
		)
	}
}