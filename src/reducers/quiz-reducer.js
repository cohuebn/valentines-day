import {STARTED_QUIZ, CHOICE_SELECTED, QUESTION_ANSWERED} from '../actions/action-types';
import { questions } from '../datasets/questions';

export const quizReducer = (state, action) => {
    switch (action.type) {
        case STARTED_QUIZ: return { ...state, started: true }
        case CHOICE_SELECTED: return { ...state, selectedChoice: action.payload }
        case QUESTION_ANSWERED: {
            const choice = state.selectedChoice;
            const choiceMetadata = state.currentQuestion.choices[choice];
            const answers = [...state.answers, choice];
            const nextQuestion = choiceMetadata.nextQuestion ? questions[choiceMetadata.nextQuestion] : null
            return {...state, currentQuestion: nextQuestion, answers};
        }
        default:
            return state || null;
    }
};