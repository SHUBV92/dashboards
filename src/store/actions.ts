import { CURRENT_USER, DATA, IS_LOGGED_IN } from './constants'

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

export const updateLoggedIn = (isLoggedIn: any) => {
    return{ 
        type: IS_LOGGED_IN,
        payload: isLoggedIn
    }
}

