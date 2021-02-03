import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA";

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
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