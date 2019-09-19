import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';
import $ from 'jquery';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Home = () => (
	<h3>Home</h3>
)
const Crypo = () => (
	<h3>Crypo-Currency</h3>
)
const Links = () => (
	<ul className="inlineList">
		<li><Link to="/">Home</Link></li>
		<li><Link to="/Crypo">Crypo</Link></li>
	</ul>
)

class Helloworld extends React.Component{
	constructor(){
		super();
		this.name = "Developer..";
		this.state = {
			course:"React",
			users:[],
			count:0,
			tasks:[
				{name:"PHP",status:false},
				{name:"MySQL",status:false},
				{name:"CodeIgniter",status:false}
			],
			currentTask:''
		};
		this.incrementCounter 	= this.incrementCounter.bind(this);
		this.changeStatus 		= this.changeStatus.bind(this);
		this.updateTask 		= this.updateTask.bind(this);
		this.addTask 			= this.addTask.bind(this);
		this.deleteTask 		= this.deleteTask.bind(this);
		this.editTask 			= this.editTask.bind(this);
	}
	
	componentDidMount(){
		$.ajax({
			url:'https://api.coinmarketcap.com/v1/ticker/?limit=2',
			success:(data)=>{
				this.setState({
					users:data
				})
			}
		})
	}
	
	editTask(index,newValue){
		var tasks 		= this.state.tasks;
		var task		= tasks[index];
		task['name']	= newValue;
		this.setState({
			tasks
		});
	}
	deleteTask(index){
		let tasks = this.state.tasks;
		tasks.splice(index,1);
		this.setState({
			tasks
		})
	}
	
	addTask(evt){
		evt.preventDefault();
		let tasks = this.state.tasks;
		tasks.push({
			name:this.state.currentTask,
			status:false
		})
		this.setState({
			tasks:tasks,
			currentTask:''
		})
		
	}
	
	updateTask(newValue){
		this.setState({
			currentTask:newValue.target.value
		})
	}
	
	incrementCounter(){
		let count = this.state.count;
		this.setState({
			count:++count
		});
	}
			
	changeStatus(index){
		console.log(this.state.tasks[index]);
		var tasks 	= this.state.tasks;
		var task 	= tasks[index];
		task.status	= !task.status;
		this.setState({
			tasks:tasks
		})
	}

	render(){
		const {users} = this.state;//const users = this.state.users;
		return (
			<Router>
				<div>
					<div className="bgcolor">
						<Links />
						<Route exact path="/" component={Home} />
						<Route path="/Crypo" component={Crypo} />
						<div style={{float:"left",width:"50%"}} className="bgcolor">						
							{this.state.course} Counter :: {this.state.count} &nbsp;
							<button onClick={this.incrementCounter}> Add Count </button><hr />
							
							<ul>
								{
									users.map((user)=>{
										return <li key={user.id}>{user.name} : {user.price_usd}</li>
									})
								}
							</ul>
						</div>
						<div style={{float:"left",width:"45%"}} className="bgcolor">
							<TodoForm 
								currentTask={this.state.currentTask}
								updateTask={this.updateTask}
								addTask={this.addTask}
							/>
							<ul>
							{
								this.state.tasks.map((task,index)=>{
									return <TodoItem key={task.name} 
													clickHandler={this.changeStatus} 
													index={index} 
													details={task}
													deleteTask={this.deleteTask} 
													editTask={this.editTask} 
													/>
								})
							}
							</ul>
						</div>
					</div>
				</div>
				</Router>
		)	
	}
}
ReactDOM.render(<Helloworld />,document.getElementById('root'))




