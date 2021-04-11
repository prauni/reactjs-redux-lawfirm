import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Parser from 'html-react-parser';
import $ from 'jquery';

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
			myname:props.myname,
			bannerContent:'',
			bannerImg:''
		}
	}
	
	componentDidMount(){
		$.ajax({
			url:'http://localhost/projects/reactjs/app03reduxcms/php/homepage.php',
			success:(res)=>{
				res = JSON.parse(res);
				console.log(res.banner.img)
				this.setState({
					bannerImg:'lawfirm/images/'+res.banner.img,
					bannerContent:res.banner.content
				})
			}
		});	
		
		setInterval(this.getUser, 3000);
		this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
		
	}	
	
	
	
	
	
	render(state){
		
		if(this.state.loggedIn === false){
			this.props.changeAuth(10);
		}else{
			this.props.changeAuth(11);
		}		
		
		return (
	<div id="contents">
		<div id="adbox">
			<div className="clearfix">
				<img src={this.state.bannerImg} alt="Img" height="382" width="594" />
				
				<div className="detail">
					    <div>{Parser(this.state.bannerContent)}</div>
						
				</div>
			</div>
		</div>
		<div className="highlight">
			<div className="clearfix">
				<div className="testimonial">
					<h2>Testimonials</h2>
					<p>
						&ldquo;Aenean ullamcorper purus vitae nisl tristique sollicitudin. Quisque vestibulum, erat ornare.&rdquo;
					</p>
					<span>-John Doe and Jane Doe-</span>
				</div>
				<h1>The Manes Winchester Promise</h1>
				<p>
					This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
				</p>
			</div>
		</div>
		<div className="featured">
			<h2>Why Choose Us?</h2>
			<ul className="clearfix">
				<li>
					<div className="frame1">
						<div className="box">
							<img src="/lawfirm/images/meeting.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>Our lawyers</b> Our website templates are created with inspiration, checked for quality and originality.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
				<li>
					<div className="frame1">
						<div className="box">
							<img src="/lawfirm/images/handshake.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>get to know us more</b> Just browse through all our Free Website Templates and ﬁnd what you’re looking for.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
				<li>
					<div className="frame1">
						<div className="box">
							<img src="/lawfirm/images/smile.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>what we offer</b> Join the discussion on our forum and meet other people in the community.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
				<li>
					<div className="frame1">
						<div className="box">
							<img src="/lawfirm/images/family-small.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>get in touch with us</b> And we love the challenge of doing something diferent and something special.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
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
		changeAuth:(status)=>{dispatch({type:'CHANGE_AUTH',payload:status})}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage)