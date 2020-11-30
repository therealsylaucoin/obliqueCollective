import { Component } from 'react';
import firebase from './firebase.js';
import RandomCollectiveStrategy from './RandomCollectiveStrategy.js'

class Contribute extends Component{
    constructor() {
        super();
        this.state = {
            //empty array in which collective cards will be pushed and from which a random collective card will be drawn
            strategyCollectiveArray: [],
            author: '',
            strategy: ''
        }
    }

    componentDidMount(){
        //Store the database reference in a variable
        const dbref = firebase.database().ref();

        //Obtain the data object from the Firebase using 'value' and the val() Firebase method and setState to that array
        dbref.on('value', (data) => {
            const dbResult = data.val();
            console.log(dbResult);

            //GETTING AN OBJECT - Let's turn it into an array with onl;y the information we need: The values!
            //using Object.values to get only the values :)
            const dbArray = Object.values(dbResult);
            console.log('Using values', dbArray);
            
            //SetState of the array to the array obtained by converting the firebase data object (only the values)
            this.setState({
                strategyCollectiveArray: dbArray
            })
        })
    }

    // Grab the input value of name when the user types and set the state
    authorInput = (input) => {
        this.setState ({
            author: input.target.value 
        })
    }

    // Grab the input value of strategy when the user types and set the state
    strategyInput = (input) => {
        this.setState ({
            strategy: input.target.value
        })
    }

    //Event handler to push the user input into the firebase array
    handleClick = () => {
        //prevent default
        // e.preventDefault();
        //Make reference to the database
        const dbref = firebase.database().ref();
        // push the author and strategy as an object
        //Because the author name is optional, if the user does not enter their name, the word Anonymous will be pushed.
        dbref.push({
            author: this.state.author === '' ? 'Anonymous' : this.state.author,
            strategy: this.state.strategy
        });
        //clear the state - this will also clear ths input because we have binded it's value to the state
        this.setState({
            strategy: '',
            author: ''
        })
    }

    render(){
        return(
            <section className="contribute" id="contribute">
                
                <h3>Collective Strategies</h3>

                <div className="intro wrapper">
                    
                    <p className="aboutIntro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eum molestiae consequuntur vel in fuga optio ut, facilis labore, id maiores voluptatibus. Rerum commodi suscipit odit maxime aut similique, qui officia ut ex, incidunt odio atque deleniti laboriosam! Incidunt, deleniti eos consequuntur placeat magni officiis. d?</p>
                
                    <form className="card">
                
                        <label className="srOnly" htmlFor="contributor">Your name</label>
                        <input type="text" id="contributor" onChange={this.authorInput} value={this.state.author} placeholder="Your name (optional)"></input>
                
                        <label className="srOnly" htmlFor="strategy">Your strategy</label>
                        <textarea maxLength="100" id="strategy" onChange={this.strategyInput} value={this.state.strategy} placeholder="Strategy (maximum characters X)"></textarea>
                
        
                        <button 

                        onClick={() => {
                            if(this.state.strategy === ''){
                            alert('You cannot contribute an empty strategy.')
                            }
                            else if(window.confirm('You are adding the following strategy to the deck: ' + this.state.strategy) && this.state.strategy !== '')
                            {this.handleClick()}}}>
                        Add card to deck</button>

                    </form>
                
                    <article>

                    <h4>How to Contribute to the Collective Deck</h4>

                        <p>1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ea nesciunt sequi, eius temporibus porro voluptatem?</p>
            
                        <p>2. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            
                        <p>3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus non ut eos quis eius? Quos nemo expedita suscipit id at.</p>
            
                    </article>
                
                </div>
                
                < RandomCollectiveStrategy array={this.state.strategyCollectiveArray}/>

            </section>
        )
    }
}

export default Contribute;


//Syl
//Dumb it down to make it more complicated.
//What must stay? Get rid of the rest. 
//Listen to your favourite song. 
//Call a friend, but talk about something else.
//Check on your plants.





