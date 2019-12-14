import React from "react";
import "./score.css";

function Score(props) {
    return(
        <div className="score">
            <h2 className="score-header">Your Score: {props.total}</h2>
            <h2 className="high-score">High Score: {props.hs}</h2>
            <h2 className="goal">Your Goal: 9</h2>
            <h2 className="status">{props.status}</h2>
        </div>
    );
}

export default Score;