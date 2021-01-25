import {_getQuestions, _getUsers, _saveQuestion} from "../../../_DATA";

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function getInitialData() {
    return Promise.all([
        _getQuestions(),
        _getUsers()]
    ).then(([questions, users]) => ({
        questions,
        users
    }))
}