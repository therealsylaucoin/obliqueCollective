import { Component } from 'react';
//Props that im getting!
    //this.props.strategy
    //this.props.author
    //this.props.showModal







//Inside of the modal:
// IF Strategy is NOT EMPTY
//Text confirmation of the strategy to add including this.props.strategy (pass in the strategy as prop)
//Two buttons:
//1.Cancel button - sets showModal state to false
//2. Add to deck! button - a) sets showModal state to false b) pushe strategy to Firebase c) sets the strategy state to ''
//IF STRATEGY IS EMPTY
////Message letting the user know that they cant submit en empty strategy - sets showModal state to false

//Code taken from contriubute functions
   //Event handler to push the user input into the firebase array
    // handleClick = () => {
    //     //Make reference to the database
    //     const dbref = firebase.database().ref();
    //     // push the author and strategy as an object
    //     //Because the author name is optional, if the user does not enter their name, the word Anonymous will be pushed.
    //     dbref.push({
    //         author: this.state.author === '' 
    //             ? 'Anonymous' 
    //             : this.state.author,
    //         strategy: this.state.strategy
    //     });
    //     //clear the state - this will also clear ths input because we have binded it's value to the state
    //     this.setState({
    //         strategy: '',
    //         author: ''
    //     })
    // }

//Code taken from previousl click event in contribute
  /* <button 

                        onClick={(e) => {
                            //prevent default
                            e.preventDefault();
                            if(this.state.strategy === ''){
                                alert('You cannot contribute an empty strategy.')
                            }

                            else if(window.confirm('You are adding the following strategy to the deck: ' + this.state.strategy) && this.state.strategy !== ''){
                                this.handleClick()
                            }}}> */


export default Modal;