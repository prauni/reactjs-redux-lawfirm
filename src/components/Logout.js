import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

class Logout extends Component{
	constructor(props){
		super(props)
		const token = localStorage.removeItem("token")
		let loggedIn = false
		this.state = {
			loggedIn
		}
		this.props.changeAuth(10);
		this.setState({ loggedIn: false });

	    this.forceUpdate();
		//window.location.reload(false);

	}
	
	render(){
		return <Redirect to="/login" />		
	}
}


const mapStateToProps = (props)=>{
	return {
		loggedIn:props.loggedIn
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		changeAuth:(status)=>{dispatch({type:'CHANGE_AUTH',payload:status})},
		changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)