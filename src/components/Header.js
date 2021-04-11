import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import equal from 'fast-deep-equal'

class Header extends Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		this.state = {
			myname:'01'+props.myname,
			//loggedIn:props.loggedIn
		}
	}

componentDidUpdate(prevProps) {
  if(!equal(this.props.loggedIn, prevProps.loggedIn)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
  {
    this.render();
  }
} 

	
	render(state){
		var str = '';
				
		
		return (
	<div id="header">
		<div className="clearfix">
			<div className="logo">
				<a href="/"><img src="/lawfirm/images/logo.png" alt="LOGO" height="52" width="362" /></a>
			</div>
			<ul className="navigation">
				<li className="active">
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
					<div>
						<a href="/lawyers">Lawyers</a>									
						<a href="/practices">Practices</a>
						<a href="/news">News</a>
						<a href="/singlepost">News Single Post</a>
						<a href="/contact">Contact</a>
					</div>
				</li>
				<li><a href="/admin">Account</a></li>
				{(this.props.loggedIn == 11) ? (<li><a href="/logout">Logout</a></li>):(<li><a href="/login">Login</a></li>)}								
			</ul>
		</div>
	</div>
	)
	}
}



const mapStateToProps = (props)=>{
	return {
		loggedIn:props.loggedIn,
		myname:props.name
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);