const colorQuestion = {
    question: 'What is your favorite color?',
    choices: {
        'Green': {},
        'Red': {},
        'Purple': {},
        'Yellow': {},
        'Blue': {},
        'Pea Green': {}
    }
}

const moodQuestion = {
    question: 'What kind of card do you want?',
    choices: {
        'Dancing': {},
        'Singing': {},
        'Words of affirmation': {}
    }
}

export const nameQuestion = {
    question: 'Who are you?',
    choices: {
        'Cesilie': { nextQuestion: 'mood' },
        'Jaxon': { nextQuestion: 'color' },
        'Levi': { nextQuestion: 'color' },
        'Maverick': {nextQuestion: 'color'},
    }
};

export const questions = {
    'name': nameQuestion,
    'mood': moodQuestion,
    'color': colorQuestion
}