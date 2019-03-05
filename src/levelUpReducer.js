
// REDUCER
import { LEVEL_UP} from '../actions/levelUp'

export default (state = [], action = {}) => {
	switch(action.type){
	case 'LEVEL_UP': 
			return [ ...state, { ...action.payload } ]             
	default: 
			return state
	}
}