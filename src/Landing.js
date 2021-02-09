import './Landing.scss';
import { IconButton } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

export function Landing(props) {
    return (
        <main id="landing">
            <h1>Valentine's Day Quiz!!</h1>
            <h2>Answer the following quiz to get the Valentine's Day present your heart has always desired.</h2>
            <iframe src="https://giphy.com/embed/3oriO6qJiXajN0TyDu" width="350" height="350" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

            <footer>
                <IconButton aria-label="Get started" onClick={() => props.onNextPageClick()}>
                    <PlayArrow />
                </IconButton>
            </footer>
        </main>
    );
}