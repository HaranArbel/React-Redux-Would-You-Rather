import {
    RECEIVE_USERS_DATA,
    ADD_QUESTION_TO_USER,
    ADD_ANSWER_TO_USER,
} from "../actions/users";

export function users(state =[], action){
    switch(action.type){
        case RECEIVE_USERS_DATA:
            return action.usders
        case ADD_QUESTION_TO_USER:
            return 2
        case ADD_ANSWER_TO_USER:
            return 3
        default:
            return state
    }
}