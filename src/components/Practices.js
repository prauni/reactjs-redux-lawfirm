import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
class Homepage extends Component{
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
	
	render(state){
		return (
<div id="contents">
		<div className="clearfix">
			<div className="sidebar">
				<div>
					<h2>Practices</h2>
					<ul>
						<li>
							<a href="post.html">Prenuptial Agreement</a>
						</li>
						<li>
							<a href="post.html">Marriage</a>
						</li>
						<li>
							<a href="post.html">Divorce</a>
						</li>
					</ul>
				</div>
				<div>
					<h2>Client Testimonials</h2>
					<p>
						&ldquo;The best family lawyers in the city so far. Me and my ex-wife didn’t have any<br/> problems settling the terms and agreement. Everything went so smoothly. We’re both very happy.&rdquo; <span>- Jared Greene</span>
					</p>
				</div>
			</div>
			<div className="main">
				<h1>Practices</h1>
				<p>
					This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
				</p>
				<ul className="practices">
					<li className="frame5">
						<a href="post.html" className="box"><img src="lawfirm/images/prenuptial.jpg" height="198" width="265"/><span>Prenuptial Agreement</span></a>
					</li>
					<li className="frame5">
						<a href="post.html" className="box"><img src="lawfirm/images/bride.jpg" height="198" width="265"/><span>Marriage</span></a>
					</li>
					<li className="frame5">
						<a href="post.html" className="box">
						<img src="lawfirm/images/divorce.jpg" height="198" width="265"/><span>Divorce</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
		)
	}
}

export default Homepage