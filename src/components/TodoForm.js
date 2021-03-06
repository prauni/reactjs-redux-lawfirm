import React from 'react';

const TodoForm = (props) => {
	return (<form onSubmit={props.addTask}>
				<input 
					value={props.currentTask} 
					onChange={props.updateTask} 
				/>
				<button type="submit">Submit</button>
			</form>)
}
export default TodoForm;