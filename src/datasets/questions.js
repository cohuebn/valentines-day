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

const cesilieThemeQuestion = {
    question: 'What theme do you want?',
    choices: {
        'Dancing': {},
        'Singing': {},
        'Animals': {},
        'Romance': {}
    }
}

export const nameQuestion = {
    question: 'Who are you?',
    choices: {
        'Cesilie': { nextQuestion: 'theme' },
        'Jaxon': { nextQuestion: 'color' },
        'Levi': { nextQuestion: 'color' },
        'Maverick': {nextQuestion: 'color'},
    }
};

export const questions = {
    'name': nameQuestion,
    'theme': cesilieThemeQuestion,
    'color': colorQuestion
}