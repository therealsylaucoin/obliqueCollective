import { Component } from 'react';
import firebase from '../firebase.js';
import Strategy from './Strategy.js';
import Modal from './Modal.js';

//Create component!
class Contribute extends Component{
    constructor() {
        super();
        this.state = {
            //array to push Collective Strategies 
            strategyCollectiveArray: [],
            //array from which a random collective card will be drawn 
            strategyCollectiveApproved: [],
            //error object for error handling - if the result is undefined, set state for the error and pass it as props to the RandomStrategy component.
            errorApi: {
                author: '',
                cardnumber: null, 
                edition: null, 
                strategy: "Oops! It looks like we can't connect to our database right now. Tweet this message to let us know. Thx! @sylaucoin"},
            //showModal state which will toggle to display the alert message if strategy being submitted is empty, or a confirmation of the strategy being submitted when not empty.
            showModal: false,
            showThanks: false,
            author: '',
            strategy: '',
        }
    }

    componentDidMount(){
        //Make reference to Firebase database
        //Store the database reference in a variable
        const dbref = firebase.database().ref();
        //Obtain the data object from the Firebase using 'value' and the val (Firebase method) and setState to that array
        dbref.on('value', (data) => {
            const dbResult = data.val();
            //GETTING AN OBJECT - Obtain an array with the information we need: The values!
            //using Object.values to get only the values :)
            const dbArray = Object.values(dbResult);
            //SetState of the array to the array obtained by convertingthefirebase data object (only the values)
            this.setState({
            strategyCollectiveArray: dbArray
            })
            //Call the filterStrategies function (declared below)
            this.filterStrategies();
        })
    }

    //function to filter the array and only get the approved cards (aka, approval = true)
    //We only want the user to draw from the approved cards
    filterStrategies = () => {
        //Use filter() to get cards with approved:true - store the approved strategies
        const approvedStrategies = this.state.strategyCollectiveArray.filter((strategy) => {
        return strategy.approved === true
        })
        //set state with the array containign only approved strategies
        this.setState({
            strategyCollectiveApproved: approvedStrategies
        })
    }

    // Grab the input value of name or strategy when the user types and set the state
    grabInput = (input) => {
        this.setState ({
            [input.target.id]: input.target.value 
        })
    }

    // Function to push the user input into the firebase array
    pushToFirebase = () => {
        //Make reference to the database
        const dbref = firebase.database().ref();
        //push the author and strategy as an object
        //author name is optional, if the user does not enter their name, the word Anonymous will be pushed.
        //approved = false, sicne the strategies need to be approved
        dbref.push({
            approved: false,
            author: this.state.author === '' 
                ? 'Anonymous' 
                : this.state.author,
            strategy: this.state.strategy
        });
        //clear the state - this will also clear ths input because we have binded it's value to the state
        this.setState({
            strategy: '',
            author: '',
            showThanks: true
        })
    }

    //declare a function that will toggle the state of showModal 
    modalToggle = (e) =>{
        e.preventDefault();
        setTimeout(() => {
            this.setState({
            showModal : !this.state.showModal,
            showThanks: false
            })
        }, 100)
    }

    render(){
        return(
            <section className="contribute">

                <div id="intro">

                    <div className="randomCollective">

                        <h3>Collective Strategies</h3>
                    
                        < Strategy
                            coverCard = 'Draw a card from the Collective Strategies deck'
                            cardArray={this.state.strategyCollectiveApproved}
                            errorMsg={this.state.errorApi}/>

                    </div>
                    
                    <h2 className="wrapper">Add to Collective Strategies</h2>
                
                    <div className="intro wrapper" >

                        <div>

                            <p className="aboutIntro">If you're like me, you've often turned to  your friends, family members, mentors, and even strangers on the Internet to ask for the best advice they can give you when trying  to solve a problem, or overcome a challenge. The Collective  Strategies deck is just that! A collection of advice, from you, and  anyone who wishes to share their most valued strategy. </p>

                            <p className="aboutIntro">I hope that you find this deck just as useful as the origin Oblique Strategies, and that you will be inclined to share a piece of advice. I've included some tips in  order to guide this process. </p>

                            <p className="aboutIntro">Submissions will be added to the Collective Strategies deck once they've been approved. Submissions are reviewed daily, therefor you should see your strategy in the deck within 24hrs.  </p>

                        </div>

                        <form className="card">

                            <label
                                className="srOnly"
                                htmlFor="author">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="author"
                                onChange={this.grabInput}
                                value={this.state.author}
                                placeholder="Your name (optional)">
                            </input>

                            <label
                                className="srOnly"
                                htmlFor="strategy">
                                Your strategy
                            </label>
                            <textarea
                                maxLength="100"
                                id="strategy"
                                onChange={this.grabInput}
                                value={this.state.strategy}
                                placeholder='Write your strategy here (maximum 100 characters)'>
                            </textarea>


                            <button onClick={this.modalToggle}
                                >
                                Add strategy to deck
                            </button>

                            {/* Expression to display the modal based on the state*/}
                            {this.state.showModal 
                            ?  < Modal
                                    showModal={this.state.showModal}
                                    showThanks={this.state.showThanks}
                                    strategy={this.state.strategy}
                                    toggle={this.modalToggle}
                                    pushToFirebase={this.pushToFirebase}/>
                            : null}

                        </form>
                        
                        <article>
                        
                            <h4>Tips for contributing a Collective Strategy</h4>
                        
                            <div className="tips">

                                <h4>1. Contribute kindly</h4>
                        
                                <p>Our goal is to create a high impact deck that many can enjoy. Let's provide advice in an inclusive manner by using that is free from words, phrases or tones that reflect prejudiced, stereotyped or discriminatory views of particular people or groups.</p>

                            </div>
                        
                            <div className="tips">

                                <h4>2. Be a generalist</h4>
                        
                                <p>Oblique Strategies are know for having a neutral and general tone that can apply to a large number of situations. They can be relatable to anyone who picks them up, without having to know who  the author is. Let's make our Collective deck just as accessible.</p>

                            </div>
                        
                            <div className="tips">
                        
                                <h4>3. Avoid acronyms and jargon</h4>
                        
                                <p>Writing in full words with clear and concise vocabulary  will prevent fellow strategists from having to overthink the meaning of  your strategy. And that's the goal!</p>

                            </div>
                        
                        </article>
                    
                    </div>
                    
                </div>

            </section>
        )
    }
}


export default Contribute;