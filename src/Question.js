import {useSelector, useDispatch} from 'react-redux';
import {QUESTION_ANSWERED} from './actions/action-types';
import {Button} from '@material-ui/core';
import './Question.scss';

export function Question() {
    const quiz = useSelector(state => state.quiz);

    const isSelected = choice => quiz.selectedChoice == choice;
    const dispatch = useDispatch();
    const setSelected = choice => dispatch({type: QUESTION_ANSWERED, payload: choice});

    const questionElements = Object.keys(quiz.currentQuestion.choices).map(choice => {
        return (
            <Button variant="outlined" value={choice} key={choice} onClick={() => setSelected(choice)} className={isSelected(choice)? 'selected' : ''}>
                {choice}
            </Button>
        );
    });
    return (
        <main id="question">
            <h1>{quiz.currentQuestion.question}</h1>
            {questionElements}
        </main>
    )
}