import { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div>
                <p>MODAL</p>
            </div>
        );
    }
}

//This needs to live in contribute!!!!!!
//Inside of the modal:
// IF Strategy is NOT EMPTY
//Text confirmation of the strategy to add including this.props.strategy (pass in the strategy as prop)
//Two buttons:
//1.Cancel button - sets showModal state to false
//2. Add to deck! button - a) sets showModal state to false b) pushe strategy to Firebase c) sets the strategy state to ''
//IF STRATEGY IS EMPTY
////Message letting the user know that they cant submit en empty strategy - sets showModal state to false



export default Modal;