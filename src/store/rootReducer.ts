import { combineReducers } from 'redux';

import { dataReducer, currentUserReducer } from './reducer'

const rootReducer = combineReducers({
    data: dataReducer,
    currentUser: currentUserReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer



