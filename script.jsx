const root = document.getElementById('root');
ReactDOM.render(<App />, root);

function App() {
    const [hands, setHands] = React.useState({user: '', house: '', winner: '', score: 0});

    const handleReset = () => setHands({...hands, user: '', house: '', winner: ''});

    const handleHands = userHand => {
        const randomNum = Math.random();
        console.log(randomNum);
        let houseHand;

        if (randomNum < 1/3)
            houseHand = 'rock';
        else if (randomNum < 2/3)
            houseHand = 'paper';
        else
            houseHand = 'scissors';

        let winner;
        let score = hands.score;
        if (userHand === houseHand)
            winner = 'draw';
        else if (userHand === 'rock' && houseHand === 'scissors' || userHand === 'paper' && houseHand === 'rock' || userHand === 'scissors' && houseHand === 'paper') {
            winner = 'user';
            score = hands.score + 1;
        }
        else
            winner = 'house';

        setHands({...hands, user: userHand, house: houseHand, winner: winner, score: score});
    }

    let userChoice;
    switch (hands.user) {
        case 'rock': userChoice = <Rock chosen='user' />; break;
        case 'paper': userChoice = <Paper chosen='user' />; break;
        case 'scissors': userChoice = <Scissors chosen='user' />;
    }

    let houseChoice;
    switch(hands.house) {
        case 'rock': houseChoice = <Rock chosen='house' />; break;
        case 'paper': houseChoice = <Paper chosen='house' />; break;
        case 'scissors': houseChoice = <Scissors chosen='house' />;
    }

    let currentState;
    if (hands.user)
        currentState = (
            <>
                {userChoice}
                {houseChoice}
            </>
        );
    else
        currentState = (
            <>
                <Paper handleHands={handleHands} />
                <Scissors handleHands={handleHands} />
                <Rock handleHands={handleHands} />
                <Triangle />
            </>
        );

    return (
        <>
            <TitleAndScore score={hands.score} />
            <div className="choices">{currentState}</div>
            <MatchResult winner={hands.winner} handleReset={handleReset} />
            <Rules />
        </>
    )
}

function TitleAndScore({ score }) {
    return (
        <div className="title-and-score">
            <h1 className="title">ROCK PAPER SCISSORS</h1>
            <div className="score-container">
                <div id="score-text">SCORE</div>
                <div id="score-number">{score}</div>
            </div>
        </div>
    )
}

function Rock({ handleHands, chosen }) {
    let choice;
    if (chosen === 'user')
        choice = <header>YOU PICKED</header>;
    else if (chosen === 'house')
        choice = <header>THE HOUSE PICKED</header>;
    return (
        <button id="rock" onClick={() => handleHands && handleHands('rock')}>
            <div className="white-background">
                <img src="images/icon-rock.svg" alt="rock" />
            </div>
            {choice}
        </button>
    )
}

function Paper({ handleHands, chosen }) {
    let choice;
    if (chosen === 'user')
        choice = <header>YOU PICKED</header>;
    else if (chosen === 'house')
        choice = <header>THE HOUSE PICKED</header>;
    return (
        <button id="paper" onClick={() => handleHands && handleHands('paper')}>
            <div className="white-background">
                <img src="images/icon-paper.svg" alt="paper" />
            </div>
            {choice}
        </button>
    )
}

function Scissors({ handleHands, chosen }) {
    let choice;
    if (chosen === 'user')
        choice = <header>YOU PICKED</header>;
    else if (chosen === 'house')
        choice = <header>THE HOUSE PICKED</header>;
    return (
        <button id="scissors" onClick={() => handleHands && handleHands('scissors')}>
            <div className="white-background">
                <img src="images/icon-scissors.svg" alt="scissors" />
            </div>
            {choice}
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
    const [isClicked, setIsClicked] = React.useState(false);
    return (
        <>
            <button className="rules-btn" onClick={() => setIsClicked(true)}>RULES</button>
            {isClicked && (
                <div className="overlay">
                    <div className="rules-modal">
                        <div className="rules-and-x">
                            <header>RULES</header>
                            <button onClick={() => setIsClicked(false)}>
                                <img src="images/icon-close.svg" alt="close-icon" />
                            </button>
                        </div>
                        <img src="images/image-rules.svg" alt="rules" />
                    </div>
                </div>
            )}
        </>
    )
}

function MatchResult({ winner, handleReset }) {
    if (winner) {
        let result;
        switch(winner) {
            case 'user': result = 'YOU WIN'; break;
            case 'house': result = 'YOU LOSE'; break;
            case 'draw': result = 'DRAW';
        }  
        return (
            <div className="match-result">
                <h2>{result}</h2>
                <button onClick={() => handleReset()}>PLAY AGAIN</button>
            </div>
        );
    }
    return null;
}