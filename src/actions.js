import { 
    CHANGE_SEARCH_FIELD,
    ROBOT_REQUEST_PENDING,
    ROBOT_REQUEST_SUCCESS,
    ROBOT_REQUEST_FAILED
} from './constants';

export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: ROBOT_REQUEST_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then( data => dispatch({type: ROBOT_REQUEST_SUCCESS, payload: data }))
      .catch( error => dispatch({ type: ROBOT_REQUEST_FAILED, payload: error }))
}