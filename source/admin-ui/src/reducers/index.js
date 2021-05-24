import { combineReducers } from 'redux'
import adminUserListCommonReducer from '../feature/admin-user-list/slice/admin-user-list-common-slice'

const reducers = {
    adminUserListCommonReducer,
};

const rootReducer = combineReducers({
    ...reducers
})

export default rootReducer;
