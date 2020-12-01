import { Component } from 'react';
import Modal from './Modal.js';

class ModalContainer extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    openModal = () =>{
        this.setState({
            showModal: this.state.showModal === false ? true : false
        })
    }

    render() {
        return (
            <div className="modal">
                
                <h1>Modal Container</h1>

                <div >

                    {this.state.showModal === false ? '' : < Modal/>}

                </div>

                <button onClick={this.openModal}>Im a modal</button>

            </div>
        );
    }
}









export default ModalContainer;