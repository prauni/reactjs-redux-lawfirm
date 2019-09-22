import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

class Admin extends Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}
		this.state = {
			loggedIn,
			myname:props.myname
		}
	}
	
	render(){
		if(this.state.loggedIn === false){
			return <Redirect to="/Login" />
		}
		return (
			<div>
				<h1>Redux using Component :: This is admin page of {this.state.myname}</h1>
				<Link to="/logout">Logout</Link>
			</div>
		)
	}

}
const mapStateToProps = (state)=>{
	return {
		myname:state.name
	}
}
export default connect(mapStateToProps)(Admin)