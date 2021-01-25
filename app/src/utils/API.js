import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA";

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(authUser, qid, answer) {
  return _saveQuestionAnswer({ authUser, qid, answer });
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