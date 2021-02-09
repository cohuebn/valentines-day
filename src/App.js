import { Component } from 'react'
import './App.scss';
import { Landing } from './Landing';
import { NameQuestion } from './NameQuestion';

export default class App extends Component {
    pageMap = {
        'landing': <Landing onNextPageClick={() => this.changePage('name-question')}></Landing>,
        'name-question': <NameQuestion></NameQuestion>
    }

    constructor(props) {
        super(props);
        this.state = {page: 'landing'};
    }

    changePage(pageName) {
        this.setState({page: pageName})
    }

    render() {
        return (
            <div className="app">
                {this.pageMap[this.state['page']]}
            </div>
        );
    }
}