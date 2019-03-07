export default (state = {correct: 0, total: 0, level: 0, streak: 0}, action = {}) => {

    switch(action.type){
	    case 'CORRECT_ANSWER':
            return {
                ...state,
                correct: state.correct + 1,
                total: state.total + 1,
                streak: state.streak + 1,
                level: state.level + Math.floor((state.streak + 1)/2)
            }
        case 'RESET_STREAK':
            return {
                ...state,
                streak: action.payload
            }    
        case 'INCORRECT_ANSWER':
            return {
                ...state,
                total: state.total + 1,
                streak: 0
            }
            
	    default:
			return state
	}
}