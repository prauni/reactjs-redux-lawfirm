import React from 'react';
/*
class TodoItem extends React.Component{
	render(){
	return (<li onClick={()=>{this.props.clickHandler(this.props.index)}} 
				className={this.props.details.status?'statustrue':'statusfalse'}>
				{this.props.details.name}
			</li>)
	}
}
*/

const TodoItem = (props) => {
	return (<li onClick={()=>{props.clickHandler(props.index)}} 
				className={props.details.status?'statustrue':'statusfalse'}>
				{props.details.name}
				<button onClick={(evt)=>{
					evt.stopPropagation();
					props.deleteTask(props.index)
				}}>Delete</button>
			</li>)
}

export default TodoItem;










