import { Component } from 'react';

class Modal extends Component {
    render() {
        return (

            <div className="modal card">
            {/* Show the correct modal based on the tstate(props) of the strategy aka, if its empty, lets show the error modal, if its not empty, lets show the confirm modal */}
            
            {
                this.props.strategy 

                    ? < Confirm 
                        strategy={this.props.strategy}
                        pushToFirebase={this.props.pushToFirebase}
                        toggle={this.props.toggle}/> 

                    : < Message 
                        toggle={this.props.toggle}
                        showThanks={this.props.showThanks}/>
            }
            
            </div>
        );
        
    }
}

//Error message for when the user has not entered any text in the strategy but clicks the button
class Message extends Component {

    render() {
        return (
            <div>
                {
                    this.props.showThanks 

                    ? <p>Thank you for your submission. your strategy will be reviewed within the next 24 hours. Once approved, it will be available in the Collective Strategies deck.</p>

                    : <p>Oops! You must enter a strategy in order to contribute.</p>
                }

                <button 
                //  Click handler - function to setState for showModal of App - passed to to chil as props
                    onClick={this.props.toggle}>
                        
                        Close
                </button>

            </div>
        );
    }
}

//Confirmation message for when the user to mkae sure that they are contributing the right thing
class Confirm extends Component {

    render() {
        return (
            <div>
                <p>You're about to submit this strategy:</p>
                <h4>{this.props.strategy}</h4>
                <button
                //Click handler to push to user strategy to Firebase - push function passed to child as props
                    onClick={this.props.pushToFirebase}>
                        
                        Okay
                </button>
                <button 
                    // Click handler - function to setState for showModal of App - passed to to chil as props
                    onClick={this.props.toggle}>
                        
                        Not Quite
                </button>


                
            </div>
        );
    }
}

export default Modal;