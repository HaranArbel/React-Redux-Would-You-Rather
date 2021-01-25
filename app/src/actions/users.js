import { _saveQuestionAnswer } from "../../../_DATA";
import { addAnswerToQuestion } from './questions'

export const RECEIVE_USERS_DATA = "RECEIVE_USERS_DATA"
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER"

export function receiveUsersData(users){
    return {
        type: RECEIVE_USERS_DATA,
        users
    }
}

export function addQuestionToUser(author, id){
    return {
        type: ADD_QUESTION_TO_USER,
        author,
        id
    }
}

export function addAnswerToUser(authedUser, qid, answer){
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return dispatch => {
        dispatch(addAnswerToUser(authedUser, qid, answer))
        dispatch(addAnswerToQuestion(authedUser, qid, answer))
        return _saveQuestionAnswer({authedUser, qid, answer}).catch(() =>
            alert('An error occurred, try again.')
        )
    }
}
