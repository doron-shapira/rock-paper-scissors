const root = document.getElementById('root');
ReactDOM.render(<App />, root);

function App() {
    const [hands, setHands] = React.useState({user: '', house: <></>});

    const handleHands = userHand => {
        const randomNum = Math.random();
        console.log(randomNum);
        let houseHand;

        if (randomNum < 1/3)
            houseHand = <Rock chosen='house' />;
        else if (randomNum < 2/3)
            houseHand = <Paper chosen='house' />;
        else
            houseHand = <Scissors chosen='house' />;

        setHands({...hands, user: userHand, house: houseHand});
    }

    let userChoice;
    switch (hands.user) {
        case 'rock':
            userChoice = (
                <>
                    <Rock chosen='user' />
                    {hands.house}
                </>
            );
            break;
        case 'paper':
            userChoice = (
                <>
                    <Paper chosen='user' />
                    {hands.house}
                </>
            );
            break;
        case 'scissors':
            userChoice = (
                <>
                    <Scissors chosen='user' />
                    {hands.house}
                </>
            )
            break;
        default:
            userChoice = (
                <>
                    <Paper handleHands={handleHands} />
                    <Scissors handleHands={handleHands} />
                    <Rock handleHands={handleHands} />
                    <Triangle />
                </>
            );
    }
    return (
        <>
            <div className="title-and-score">
                <Title />
                <Score />
            </div>
            <div className="choices">{userChoice}</div>
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