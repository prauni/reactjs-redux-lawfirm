import React from 'react';
import './App.css';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
		return {
			myname:state.name
		}
	}

function App(props) {
  return (
    <div className="App">
      <h3>Redux using Function :: My name is {props.myname} :: </h3>
	  <button onClick={()=>{props.changeName("Suresh")}}>Change Name</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
	return {
	changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
	}
}	
export default connect(mapStateToProps,mapDispatchToProps)(App);







