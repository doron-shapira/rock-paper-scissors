const root = document.getElementById('root');
ReactDOM.render(<App />, root);

function App() {
    return (
        <>
            <div className="title-and-score">
                <Title />
                <Score />
            </div>
            <div className="choices">
                <Paper />
                <Scissors />
                <Rock />
                <Triangle />
            </div>
            <Rules />
        </>
    )
}

function Title() {
    return <h1 className="title">ROCK PAPER SCISSORS</h1>
}

function Score() {
    return (
        <div className="score-container">
            <div id="score-text">SCORE</div>
            <div id="score-number">0</div>
        </div>
    )
}

function Rock() {
    return (
        <button id="rock">
            <div className="white-background">
                <img src="images/icon-rock.svg" alt="rock" />
            </div>
        </button>
    )
}

function Paper() {
    return (
        <button id="paper">
            <div className="white-background">
                <img src="images/icon-paper.svg" alt="paper" />
            </div>
        </button>
    )
}

function Scissors() {
    return (
        <button id="scissors">
            <div className="white-background">
                <img src="images/icon-scissors.svg" alt="scissors" />
            </div>
        </button>
    )
}

function Triangle() {
    return (
        <div className="triangle">
            <span id="left"></span>
            <span id="right"></span>
            <span id="base"></span>
        </div>
    )
}

function Rules() {
    return <button id="rules">RULES</button>
}