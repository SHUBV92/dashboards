import { combineReducers } from 'redux';

import { dataReducer, currentUserReducer, loggedInReducer } from './reducer'

const rootReducer = combineReducers({
    data: dataReducer,
    currentUser: currentUserReducer,
    loggedIn: loggedInReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer



