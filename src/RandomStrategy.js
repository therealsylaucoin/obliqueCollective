import { Component, Fragment } from 'react';
import About from './About.js'

class RandomStrategy extends Component {
    constructor(){
        super();
        this.state = {
            //Empty opbject to store the random strategy drawn from the deck
            randomStrategy: {
                author: '',
                cardnumber: null, 
                edition: null, 
                id: null, 
                strategy: ''}
        }
    }


    //function to get a random card passing that random index + set state of the card
    drawRandomStrategy = (array) => {
        //Get a random index
        let randomIndex = Math.floor((Math.random() * array.length))
        console.log(array[randomIndex]);
        //setState of the randomStrategy
        this.setState({
            randomStrategy: array[randomIndex]
        })
    }


    render(){
        return(

            <Fragment>
                {/* Get the relevent Strategy info and pring it on the page! */}
                <section className="strategy">
            
                    <div className="card">
                    
                        {/*The strategy: */}
                        <h2>{this.state.randomStrategy.strategy === '' ? 'Over One Hundred Worthwhile Dilemmas' : this.state.randomStrategy.strategy}</h2>
            
                        <div>
                            {/* The edition + card number OR collective + author */}
                            <p>{this.state.randomStrategy.edition === null ? '' : 'Edition: ' +     this.   state.randomStrategy.edition}</p>
                            <p>{this.state.randomStrategy.cardnumber === null ? '' : 'Card no. '    +  this.state.randomStrategy.cardnumber}</p>
                        </div>
            
                    </div>
            
                    <button onClick={() => {this.drawRandomStrategy(this.props.strategyArray)}}>Draw Random Strategy</button>
            
                </section>
            
                < About />
            
            </Fragment>
        )
    }
}

export default RandomStrategy;