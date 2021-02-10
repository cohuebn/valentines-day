import {STARTED_QUIZ, QUESTION_ANSWERED} from '../actions/action-types';
import { questions } from '../datasets/questions';

export const quizReducer = (state, action) => {
    if (action.type == STARTED_QUIZ) {
        return { ...state, started: true };
    }
    if (action.type == QUESTION_ANSWERED) {
        const choice = action.payload;
        const choiceMetadata = state.currentQuestion.choices[choice];
        const answers = [...state.answers, choice];
        const nextQuestion = choiceMetadata.nextQuestion ? questions[choiceMetadata.nextQuestion] : null
        return {...state, currentQuestion: nextQuestion, answers};
    }
    return state || null;
};