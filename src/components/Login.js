import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import $ from 'jquery';
import {connect} from 'react-redux';

class Login extends Component{
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
		const apiUrl = 'http://localhost/projects/reactjs/app03reduxcms/php/login.php';
		//const apiUrl = 'http://jsonplaceholder.typicode.com/posts';		
		/*
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
		*/
		this.props.changeAuth(11);
				
		let fdata = "username="+username+"&password="+password;
		$.ajax({
			url:apiUrl,
			type: "POST",
			data: fdata,
			success:(response)=>{
				console.log('Ajax success ');
				let dataval = $.parseJSON(response);					
				console.log(dataval['time']+':::'+dataval['username']);
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
			return <Redirect to="/admin" />
		}
			
		return (
	<div id="contents">
		<div class="clearfix">
			<div class="sidebar">
				<div>
					<h2>Contact Info</h2>
					<ul class="contact">
						<li>
							<p>
								<span class="home"></span> <em>Manes Winchester<br/> Family Law Firm</em> the address city, state 1111
							</p>
						</li>
						<li>
							<p class="phone">
								Phone: (+20) 000 222 999
							</p>
						</li>
						<li>
							<p class="fax">
								Fax: (+20) 000 222 988
							</p>
						</li>
						<li>
							<p class="mail">
								Email: info@freewebsitetemplates.com
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="main" style={{height:'auto',minHeight:'auto'}}>
				<h1>Login</h1>
				<form onSubmit={this.submitForm} className="message">
					<label>Username</label>
					<input name="username" value={this.state.username} onChange={this.onChange} type="text" placeholder="Username" /> <br />
					<label>Password</label>
					<input name="password" value={this.state.password} onChange={this.onChange} type="text" placeholder="Password" /> <br />
					<input type="submit" value="Login" />
				</form>				
			</div>
		</div>
	</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		loggedIn:'BB'
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		changeAuth:(status)=>{dispatch({type:'CHANGE_AUTH',payload:status})},
		changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:'N021'})}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)


