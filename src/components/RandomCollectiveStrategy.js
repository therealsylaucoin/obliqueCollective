import { Component } from 'react';
import { FaTwitter } from 'react-icons/fa';


class RandomCollectiveStrategy extends Component {
    constructor(){
        super();
        this.state = {
            //Empty object to store the random strategy drawn from the deck
            randomCollectiveStrategy: {
                author: '',
                strategy: ''},
            cardnumber: null, 
            totalDeckCount: null, 
        }
    }


    //function to get a random card passing that random index + set state of the card
    handleClick = (array) => {
        //Error handle in case we get no data from Firebase. 
        if(array.length === 0){
            // setState to an error object in order to display the message on the card
            this.setState({
                randomCollectiveStrategy: {
                    author: '',
                    strategy: "Oops! It looks like we can't connect to our database right now. Tweet this message to let us know. Thx! @sylaucoin"  
                }
            })
        //If we get data
        } else {
            //Get a random index
            let randomIndex = Math.floor((Math.random() * array.length))
            //setState of the randomStrategy
            this.setState({
                randomCollectiveStrategy: array[randomIndex],
                cardnumber: randomIndex + 1,
                totalDeckCount: array.length
            })
        }
    }


    render(){
        return(
                
                <section className="randomCollective" id="randomCollective">

                    <h3>Collective Strategies</h3>
                    {/* //Get the relevent Strategy info and print it on the page! */}
                    <div className="card">
                        {/*The strategy: */}
                        <h2>{this.state.randomCollectiveStrategy.strategy
                            ? this.state.randomCollectiveStrategy.strategy
                            : 'Draw a card from the Collective Strategies deck' }
                        </h2>
            
                        <div>
                            {/* The contributor name */}
                            <p>{this.state.randomCollectiveStrategy.author
                            ? 'Contributed by: ' + this.state.randomCollectiveStrategy.author
                            : ''}
                            </p>
            
                            {/* {The card number and deck total} */}
                            <p>{this.state.cardnumber
                            ? 'Card no. ' + this.state.cardnumber + ' out of ' + this.state.totalDeckCount
                            : ''}
                            </p>
                            
                            {this.state.randomCollectiveStrategy.strategy
                            ? <a
                                href={`https://twitter.com/intent/tweet?text=${this.state.randomCollectiveStrategy.strategy} %23collectivestrategies&url=https://             obliquecollective.netlify.app`}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Post to Twitter"
                                >
                                < FaTwitter/>
                            </a>
                            : null}
            
                        </div>
            
                    </div>
            
                    <button onClick={() => {
                        this.handleClick(this.props.array)}}>
            
                        Draw random Collective Strategy
                    </button>
            
                </section>
            
        )
    }
}

export default RandomCollectiveStrategy;