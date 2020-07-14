import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';

class Admin extends Component{
	constructor(props){
		super(props)
		this.state = {
			course:"Python"
		}		
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}
		this.state = {
			loggedIn,
			myname:props.myname,
			userDetails:'Sam'
		}
		
		this.getUser 	= this.getUser.bind(this);
	}

	componentDidMount(){
		$.ajax({
			url:'http://localhost/projects/reactjs/app03redux/php/admincontent.php',
			success:(res)=>{
				res = JSON.parse(res);
				this.setState({
					course:res.msg
				})
			}
		});	
		
		setInterval(this.getUser, 3000);
		this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
		
	}

	getUser(){
		fetch('http://localhost/projects/reactjs/app03redux/php/admincontent.php')
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				userDetails: result.msg
			  });
			},
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
	}	
	



	
	
	render(state){
		this.props.changeAuth(11);
		if(this.state.loggedIn === false){
			this.props.changeAuth(10);
			return <Redirect to="/login" />
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
				<h1>My Account</h1>
			<div>
				<h3 style={{"display":"inline-block",}}>
				Redux using Class Component ( Admin ) :: This is admin page, 
				without login you can't access this page. <br />
				this.state.myname :: {this.state.myname} <br />
				this.props.myname :: {this.props.myname}
				</h3>
				<h4 style={{'border':'1px solid #F00', 'padding':'15px'}}>Course ::: {this.state.course}</h4>
				<h4 style={{'border':'1px solid #F00', 'padding':'15px'}}>userDetails ::: {this.state.userDetails}</h4>
				<h3>{this.state.time}</h3>
				<button type="button" onClick={this.getUser}>Get User</button> &nbsp; &nbsp;
				<button onClick={()=>{this.props.changeName("Vimal")}}>Change Name to Vimal</button> &nbsp; &nbsp; 
				<button onClick={()=>{this.props.changeName("Alok")}}>Change Name to Alok</button>
				{/*<Link to="/logout">Logout</Link>*/ }
			</div>			
			</div>
		</div>
	</div>		
		
		
		
		

		)
	}
}


const mapStateToProps = (state)=>{
	return {
		myname:state.name
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		changeAuth:(status)=>{dispatch({type:'CHANGE_AUTH',payload:status})},
		changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)