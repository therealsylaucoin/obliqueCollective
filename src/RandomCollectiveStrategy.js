import { Component } from 'react';

class RandomCollectiveStrategy extends Component {
    constructor(){
        super();
        this.state = {
            //Empty opbject to store the random strategy drawn from the deck
            randomCollectiveStrategy: {
                author: '',
                strategy: ''},
            cardnumber: null, 
            totalDeckCount: null, 
        }
    }


    //function to get a random card passing that random index + set state of the card
    drawRandomStrategy = (array) => {
        //Get a random index
        let randomIndex = Math.floor((Math.random() * array.length))
        console.log(array[randomIndex]);
        //setState of the randomStrategy
        this.setState({
            randomCollectiveStrategy: array[randomIndex],
            cardnumber: randomIndex + 1,
            totalDeckCount: array.length
        })
        console.log(this.state.cardnumber);
        console.log(this.state.totalDeckCount);
    }


    render(){
        return(
            //Get the relevent Strategy info and pring it on the page!
            <section className="randomCollective" id="randomCollective">

                <div className="card">
                    {/*The strategy: */}
                    <h2>{this.state.randomCollectiveStrategy.strategy === '' ? 'Draw a card from the Collective Strategies deck' : this.state.randomCollectiveStrategy.strategy}</h2>
                
                    <div>
                        {/* The contributor name */}
                        <p>{this.state.randomCollectiveStrategy.author === '' ? '' : 'Contributed by: ' + this.state.randomCollectiveStrategy.author}</p>
                
                        {/* {The card number and deck total} */}
                        <p>{this.state.cardnumber === null ? '' : 'Card no. ' + this.state.cardnumber + ' out of ' + this.state.totalDeckCount}</p>

                    </div>

                </div>

                <button onClick={() => {this.drawRandomStrategy(this.props.array)}}>Draw Random Collective Strategy</button>
            </section>
        )
    }
}

export default RandomCollectiveStrategy;