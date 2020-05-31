import { 
    CHANGE_SEARCH_FIELD,
    ROBOT_REQUEST_PENDING,
    ROBOT_REQUEST_SUCCESS,
    ROBOT_REQUEST_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchDevs = (state=initialStateSearch, action={}) => {
    console.log(action.type);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state
    }
  
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}


export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case ROBOT_REQUEST_PENDING:
            return Object.assign({}, state, {isPending: true} );
        case ROBOT_REQUEST_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case ROBOT_REQUEST_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state
    }
}