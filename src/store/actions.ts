import { CURRENT_USER_STATE, DATA, IS_LOGGED_IN } from './constants'

export const updateData = (data: object) => {
    return {
        type: DATA,
        payload: data
    }
}

export const updateCurrentUser = (currentUser: string|undefined) => {
    return{ 
        type: CURRENT_USER_STATE,
        payload: currentUser
    }
}

export const updateLoggedIn = (isLoggedIn: boolean) => {
    return{ 
        type: IS_LOGGED_IN,
        payload: isLoggedIn
    }
}

