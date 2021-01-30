import { saveQuestion } from '../utils/API'
import { addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS_DATA = "RECEIVE_QUESTIONS_DATA"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION"

export function receiveQuestionsData(questions){
    return {
        type: RECEIVE_QUESTIONS_DATA,
        questions
    }
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addAnswerToQuestion(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function handleSaveQuestion (optionOne, optionTwo, author) {
    return dispatch => {
        return saveQuestion({optionOne, optionTwo, author}).then(question => {
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(question))
        }).catch(() => 'An error occurred, try again')
    }
}

