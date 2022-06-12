import React, { useEffect, useState } from "react";
import { getQuestions } from "./getQuestions";

export default function Stats() {
    const [play, setPlay] = useState(false);
    const [loading, setLoad] = useState(true);
    var questions = [];
    const [quiz, setQuiz] = useState([]);
    const [curQ, setCur] = useState(0);
    const [score, setScore] = useState(0);
    async function get() {
        questions = await getQuestions();
        setQuiz(questions);
        setLoad(false);
    }

    useEffect(() => {
        get();
    }, []);

    const [state, setState] = useState('Button');
    const [correct, setCor] = useState('Button');
    var clicked = false;
    const handleClick = (isCorrect) => {
        if (!clicked)
        {
            if (isCorrect) {
                setScore(score + 1);
                setCor('Button-correct');
            }
            else {
                setCor('Button-correct');
                setState('Button-incorrect');
            }
    
            setTimeout(function() {
                clicked = true;
                setState('Button');
                setCor('Button');
                if (curQ < 9) {
                    setCur(curQ + 1);
                }
                else {
                    setPlay(true);
                }
            }, 1000)
        }
    };

    function reset() {
        setPlay(false);
        setLoad(true);
        questions = [];
        setCur(0);
        setScore(0);
        get();
    }


    return (
        <div className="Quiz">
        {play ?
        <div className="PlayAgain">
            <div className="GameScore">
                <h1>You scored</h1>
                <h2>{score}/10</h2>
                <button className="Button" onClick={reset}>Play Again?</button>
            </div>
        </div>
        :
        <div className="Message">
            <h2>Who's stats are these?</h2>
            <small>2022 Season</small>
            <div>
                {loading ? <div>loading...</div> :
                <div>
                    <div className="Stats">
                        <span className="dataBlock"><strong>PPG : </strong>{quiz[curQ].ppg}</span>
                        <span className="dataBlock"><strong>APG : </strong>{quiz[curQ].apg}</span>
                        <span className="dataBlock"><strong>RPG : </strong>{quiz[curQ].rpg}</span>
                        <span className="dataBlock"><strong>FG% : </strong>{quiz[curQ].fgp}</span>
                    </div>
                    <div className="Answers">
                        <span className='answer-section'>
                        {quiz[curQ].arr.map((answerOption) => (
                        <span>
                            {answerOption.isCorrect ? <button className={correct} id="1" onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.name}</button> :
                            <button className={state} id="1" onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.name}</button>
                            }   
                        </span>
                        ))}
                        </span>       
                    </div>
                    <div className="Score">
                    <h2>Score</h2>
                    <p className="Fraction">{score}/{curQ}</p>
                    </div> 
                </div>
                }
            </div>
        </div>
        }
    </div>
    )
}