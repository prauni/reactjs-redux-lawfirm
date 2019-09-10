import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';

class Helloworld extends React.Component{
	constructor(){
		super();
		this.name = "Developer..";
		this.state = {
			course:"React",
			count:0,
			tasks:[
				{name:"PHP",status:false},
				{name:"MySQL",status:false},
				{name:"CodeIgniter",status:false},
				{name:"Laravel",status:false},
				{name:"React",status:false}
			],
			currentTask:''
		};
		this.incrementCounter 	= this.incrementCounter.bind(this);
		this.changeStatus 		= this.changeStatus.bind(this);
		this.updateTask 		= this.updateTask.bind(this);
		this.addTask 			= this.addTask.bind(this);
		this.deleteTask 		= this.deleteTask.bind(this);
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
		return (
			<div>
				<div className="bgcolor">
					<h4>
						{this.state.course} Counter :: {this.state.count} &nbsp;
						<button onClick={this.incrementCounter}> Add Count </button><hr />
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
												deleteTask={this.deleteTask} />
							})
						}
						</ul>
					</h4>
				</div>
			</div>
		)	
	}
}
ReactDOM.render(<Helloworld />,document.getElementById('root'))




