import { Component } from 'react';

class Modal extends Component {
    render() {
        return (

            <div className="modal card">
            {/* Show the correct modal based on the tstate(props) of the strategy aka, if its empty, lets show the error modal, if its not empty, lets show the confirm modal */}
            
            {
                this.props.strategy === ''
                    ? < Error 
                        toggle={this.props.toggle}/>
            
                    : < Confirm 
                        strategy={this.props.strategy}
                        pushToFirebase={this.props.pushToFirebase}
                        toggle={this.props.toggle}/> 
            }
            
            </div>
        );
        
    }
}

//Error message for when the user has not entered any text in the strategy but clicks the button
class Error extends Component {

    render() {
        return (
            <div>
                <p>Oops! You must enter a strategy in order to contribute.</p>

                <button 
                //  Click handler - function to setState for showModal of App - passed to to chil as props
                    onClick={this.props.toggle}>
                        
                        Okay
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
                    // Click handler - function to setState for showModal of App - passed to to chil as props
                    onClick={this.props.toggle}>
                        
                        Not Quite
                </button>

                <button
                //Click handler to push to user strategy to Firebase - push function passed to child as props
                    onClick={this.props.pushToFirebase}>
                        
                        Okay
                </button>

                
            </div>
        );
    }
}





export default Modal;