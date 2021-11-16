import { CURRENT_USER, DATA } from './constants'

export const updateData = (data: any) => {
    return {
        type: DATA,
        payload: data
    }
}

export const updateCurrentUser = (currentUser: any) => {
    return{ 
        type: CURRENT_USER,
        payload: currentUser
    }
}