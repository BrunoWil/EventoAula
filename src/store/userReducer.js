const INITIAL_STATE = {
	userEmail: '',
	userCategoria:'',
	userLogado: 0,

};

function userReducer(state =INITIAL_STATE, action){
	switch(action.type){
		case 'LOG_IN':
			return {... state, userLogado: 1, userEmail: action.userEmail, userCategoria: action.userCategoria}
		case 'LOG_OUT':
			return {... state, userLogado: 0, userEmail: '', userCategoria: ''}
		default:
			return state;


	}
}

export default userReducer;