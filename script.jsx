const root = document.getElementById('root');
ReactDOM.render(<App />, root)

function App() {
    return <TitleAndScore />
}

function Title() {
    return <h1>ROCK PAPER SCISSORS</h1>
}

function Score() {
    return (
        <div className='score-container'>
            <div id="score-text">SCORE</div>
            <div id="score-number">0</div>
        </div>
    )
}

function TitleAndScore() {
    return (
        <div className="title-and-score">
            <Title />
            <Score />
        </div>
    )
}