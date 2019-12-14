import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PuppyCard from "./components/Card";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import puppies from "./puppies.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {puppies,
            clicked: [],
            score: 0,
            gameStatus: ""
        };
    }

    // the card shuffling function thingy
    // it also checks to see if you've won or lost or neither yet
    shuffleCards = id => {
        let clicked = this.state.clicked;

        console.log(clicked);

        // if the clicked array includes the id of the dog you just clicked, you lost
        // score is reset to 0, game status is set to the message for losing, and the clicked array is reset to empty
        if(clicked.includes(id)) {
            this.setState({clicked: [], 
                score: 0, 
                gameStatus: "Game over! You lost. Click a dog to play again!"
            });

            console.log("You lost.");
        }
        else { // if the dog id you clicked ISN'T in the array, it gets pushed to the array
            clicked.push(id);

            // checks if the array length is 9, because if it is you've won
            // clicked is reset to empty, score is set to 9, and the game status is set to the win message
            // I changed the win message a little after putting the pictures in the readme
            // so the readme pictures aren't entirely accurate
            // but I'm not good at memory games like this so the picture stays inaccurate
            if(clicked.length === 9) {
                this.setState({clicked: [],
                    score: 9,
                    gameStatus: "Congratulations! You win! Click a dog to play again."
                });

                console.log("You won!");
            }
            else { // if you haven't won yet, the score is set to the length of the array and the game status is empty
                // I empties the status here because that way, once you click on a dog card to start a new game after a win or loss
                // the game status message on the screen goes away
                this.setState({score: clicked.length,
                    gameStatus: ""
                });

                // and here, finally
                // we handle the rearranging of the placement of the dog cards
                // because if you have neither won nor lost, it's time for that!
                for(let i = puppies.length-1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i+1));

                    [puppies[i], puppies[j]] = [puppies[j], puppies[i]];
                }
            }
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Dog Clicker Memory Game
                </header>
                <Score total = {this.state.score}
                    status = {this.state.gameStatus}>
                </Score>
                <Wrapper>
                    {this.state.puppies.map(puppy => (
                        <PuppyCard shuffleCards={this.shuffleCards} image={puppy.image} id={puppy.id} key={puppy.id}></PuppyCard>
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;