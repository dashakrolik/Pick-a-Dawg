import { LEVEL_UP } from '../actions/levelUpAction'

const levelUpReducer = (state = initialState, action = {}) => {
  switch(action.type){
	  case LEVEL_UP:
			return  state.concat(action.payload)
	  default:
			return state
	}
}

export default levelUpReducer
const initialState = ["shihtzu", "mastiff", "weimaraner"]
