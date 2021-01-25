import {
    RECEIVE_USERS_DATA,
    ADD_QUESTION_TO_USER,
    ADD_ANSWER_TO_USER,
} from "../actions/users";

export function users(state = [], action) {
    switch (action.type) {
        case RECEIVE_USERS_DATA:
            return action.users
        case ADD_QUESTION_TO_USER:
            const {author, id} = action
            return {
                ...state,
                [author]: {
                    ...state[author],
                    question: state[author].question.concat(id)
                }
            }
        case ADD_ANSWER_TO_USER:
            const {authedUser, qid, answer} = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state
    }
}