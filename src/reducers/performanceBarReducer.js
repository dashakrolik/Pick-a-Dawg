export default (state = {correct: 0, total: 0, level: 1, streak: 0}, action = {}) => {

    switch(action.type){
	    case 'CORRECT_ANSWER':
            return {
                ...state,
                correct: state.correct + 1,
                total: state.total + 1,
                streak: state.streak + 1,
                // level: state.level + Math.floor((state.streak + 1)/9)
            }
        case 'RESET_STREAK':
            return {
                ...state,
                streak: action.payload
            }    
        case 'LEVEL_COUNT':
            return {
                ...state,
                level: state.level +1
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