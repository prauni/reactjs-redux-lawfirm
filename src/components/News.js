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
					<h2>Recent News</h2>
					<p>
						This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.
					</p>
					<p>
						You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
					</p>
					<p>
						If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
					</p>
				</div>
				<div>
					<h2>Client Testimonials</h2>
					<p>
						&ldquo;The best family lawyers in the city so far. Me and my ex-wife didn’t have any<br/> problems settling the terms and agreement. Everything went so smoothly. We’re both very happy.&rdquo; <span>- Jared Greene</span>
					</p>
				</div>
			</div>
			<div className="main">
				<h1>News</h1>
				<ul className="news">
					<li>
						<div className="box">
							<img src="lawfirm/images/bride-sideview.jpg" alt="Img" height="245" width="213"/>
						</div>
						<p className="info">
							31st January 2023 by <span className="author">Manes Winchester</span>
						</p>
						<h2>The Basics of Marriage Laws</h2>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link
						</p>
						<a href="singlepost.html" className="more">Read More</a>
					</li>
					<li>
						<div className="box">
							<img src="lawfirm/images/happy.jpg" alt="Img" height="245" width="213" />
						</div>
						<p className="info">
							31st January 2023 by <span className="author">Manes Winchester</span>
						</p>
						<h2>Happy Newly Divorced Women</h2>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link
						</p>
						<a href="singlepost.html" className="more">Read More</a>
					</li>
					<li>
						<div className="box">
							<img src="lawfirm/images/children.jpg" alt="Img" height="245" width="213" />
						</div>
						<p className="info">
							31st January 2023 by <span className="author">Manes Winchester</span>
						</p>
						<h2>Children &amp; Divorced Parents</h2>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link
						</p>
						<a href="singlepost.html" className="more">Read More</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
		)
	}
}

export default Homepage