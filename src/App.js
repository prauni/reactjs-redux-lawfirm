import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h3>Redux using Function :: My name is {props.myname}</h3>
    </div>
  );
}
const mapStateToProps = (state)=>{
		return {
			myname:state.name
		}
	}
export default connect(mapStateToProps)(App);
