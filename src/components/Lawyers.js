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
					<h2>Our Lawyers</h2>
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
						&ldquo;The best family lawyers in the city so far. Me and my ex-wife didn’t have any<br /> problems settling the terms and agreement. Everything went so smoothly. We’re both very happy.&ldquo; <span>- Jared Greene</span>
					</p>
				</div>
			</div>
			<div className="main">
				<h1>Our Lawyers</h1>
				<div className="section">
					<h2>Directors</h2>
					<ul>
						<li>
							<div className="frame4">
								<div className="box">
									<img src="lawfirm/images/thumbnail-sideview.jpg" alt="Img" height="94" width="90" />
								</div>
							</div>
							<p>
								<b>Pauline H. Wilson</b> This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link to our website from this website template.
							</p>
						</li>
						<li>
							<div className="frame4">
								<div className="box">
									<img src="lawfirm/images/thumbnail-focus.jpg" alt="Img" height="94" width="90" />
								</div>
							</div>
							<p>
								<b>Kenneth E. Lunderberg</b> You're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
							</p>
						</li>
					</ul>
				</div>
				<div className="section">
					<h2>Senior Associates</h2>
					<ul>
						<li>
							<div className="frame4">
								<div className="box">
									<img src="lawfirm/images/thumbnail-smile.jpg" alt="Img" height="94" width="90" />
								</div>
							</div>
							<p>
								<b>George R. Montgomery</b> This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link to our website from this website template.
							</p>
						</li>
					</ul>
				</div>
				<div className="section last-child">
					<h2>Associates</h2>
					<ul>
						<li>
							<div className="frame4">
								<div className="box">
									<img src="lawfirm/images/thumbnail-frontview.jpg" alt="Img" height="94" width="90" />
								</div>
							</div>
							<p>
								<b>Denise M. Silvia</b> This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.You can remove any link to our website from this website template.
							</p>
						</li>
						<li>
							<div className="frame4">
								<div className="box">
									<img src="lawfirm/images/thumbnail-happy.jpg" alt="Img" height="94" width="90" />
								</div>
							</div>
							<p>
								<b>Nancy R. Bakken</b> You're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
		)
	}
}

export default Homepage