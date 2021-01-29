import { getInitialData } from '../utils/API'
import { receiveQuestionsData } from './questions.js'
import { receiveUsersData } from './users.js'
import { showLoading, hideLoading } from "react-redux-loading";

export default function handleInitialData (){

    console.log("hello")

    return dispatch => {
            dispatch(showLoading())
            return getInitialData().then(({questions, users}) => {
                dispatch(receiveQuestionsData(questions))
                dispatch(receiveUsersData(users))
                dispatch(hideLoading())

        })
    }
}
