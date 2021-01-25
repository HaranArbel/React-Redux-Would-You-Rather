import { getInitialData } from '../utils/api'
import { receiveQuestionsData } from 'questions.js'
import { receiveUsersData } from 'users.js'

export default function handleInitialData (){

    return dispatch => {
        getInitialData().then(({questions, users}) => {
            dispatch(receiveQuestionsData(questions))
            dispatch(receiveUsersData(users))
        })
    }
}