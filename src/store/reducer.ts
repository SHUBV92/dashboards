import { DATA } from './constants'

interface DataState {
    data: string
}

const INITIAL_STATE: DataState = {
    data: "DATE"
}

const dataReducer = (state = INITIAL_STATE, action: any)=> {
    switch(action.type){
        case DATA: 
        return {
            ...state, 
            data: action.payload.data
        }

        default: return state;
    }
}

export default dataReducer