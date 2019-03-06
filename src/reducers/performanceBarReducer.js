export default (state = {correct: 0, total: 0, level: 1}, action = {}) => {

    switch(action.type){
	    case 'CORRECT_ANSWER':
            return {
                ...state,
                correct: state.correct + 1,
                total: state.total + 1,
                level: Math.floor((state.correct + 1)/10) + 1
            }
            
        case 'INCORRECT_ANSWER':
            return {
                ...state,
                total: state.total + 1
            }
            
	    default:
			return state
	}
}