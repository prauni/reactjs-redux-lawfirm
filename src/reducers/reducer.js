const iState = {
	name:"Rajesh",
	wishes:['eat','code']
}
const reducer=(state=iState,action)=>{
	if(action.type==='CHANGE_AUTH'){
		return {
			...state,
			loggedIn:action.payload
		}
	}
	if(action.type==='CHANGE_NAME'){
		return {
			...state,
			name:action.payload
		}
	}
	
	return state;
}

export default reducer;