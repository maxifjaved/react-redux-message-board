import { combineReducers } from 'redux';

var myObject = [];
export default function reducers( state = myObject, action ){
	let payload = action.payload;
	switch( action.type ) {
	case( 'SAVE_MESSAGE' ):
		if(state.indexOf(payload) > -1){
			return state
		}else{
			state.push(payload);
			return state;
		}
	case( 'DELETE_MESSAGE' ):
		var index = state.indexOf(payload);
		state.splice(index,1);
		return state;
	default:
		return state;
	}
};
// const rootReducer = combineReducers({
//   state: (state = {}) => state,
//   messagesState
// });

// export default rootReducer;