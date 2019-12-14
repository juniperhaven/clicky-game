import React from "react";
import "./card.css";

// so I ended up not being able to load the images from local files
// but I left the files in the program in case the links ever stop working or something

function PuppyCard(props) {
    return(
        <div className="card-container">
            <img src={props.image} alt = "image of dog" id={props.id} onClick={() => props.shuffleCards(props.id)} className="shuffle-cards"></img>
        </div>
    );
}

export default PuppyCard;