import { DATA, CURRENT_USER } from './constants'

interface DataState {
    data: string;
}

const INITIAL_STATE: DataState = {
    data: "DATE",
}

const CURRENT_STATE = {
    name: "Joe"
}

export const dataReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type){
        case DATA: 
        return {
            ...state, 
            data: action.payload.data
        }

        default: return state;
    }
}

export const currentUserReducer = (state = CURRENT_STATE, action: any) => {
    switch(action.type){
        case CURRENT_USER: 
        return {
            ...state, 
            name: action.payload
        }

        default: return state;
    }
}


