import {useSelector, useDispatch} from 'react-redux';
import {QUESTION_ANSWERED} from './actions/action-types';
import {Button} from '@material-ui/core';
import './Question.scss';

export function Result() {
    const quiz = useSelector(state => state.quiz);

    return (
        <main id="question">
            <h1>Happy Valentine's Day!</h1>
            <p>{quiz.answers}</p>
        </main>
    )
}