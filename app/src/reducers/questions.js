import {
    RECEIVE_QUESTIONS_DATA,
    ADD_QUESTION,
    ADD_ANSWER_TO_QUESTION,
} from "../actions/questions";

export function questions(state =[], action){
    switch(action.type){
        case RECEIVE_QUESTIONS_DATA:
            return action.questions
        case ADD_QUESTION:
            return 2
        case ADD_ANSWER_TO_QUESTION:
            return 3
        default:
            return state
    }
}