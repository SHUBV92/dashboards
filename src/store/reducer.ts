import { DATA, CURRENT_USER_STATE, IS_LOGGED_IN } from './constants'

interface DataState {
    data: string;
}

const INITIAL_STATE: DataState = {
    data: "DATE",
}

const CURRENT_STATE = {
    name: "Joe"
}

const LOGGED_IN_STATE = {
    loggedIn: false
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
        case CURRENT_USER_STATE: 
        return {
            ...state, 
            name: action.payload
        }

        default: return state;
    }
}

export const loggedInReducer = ( state = LOGGED_IN_STATE, action: any) => {
    switch(action.type){
        case IS_LOGGED_IN: 
        return {
            ...state, 
            loggedIn: action.payload
        }

        default: return state;
    }
}

