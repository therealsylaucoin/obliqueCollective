import { Component } from 'react';
import { Animate } from "react-simple-animate";


class AnimationTest extends Component {
    constructor(){
        super();
        this.state = {
            play: false
        }
    }

    //handleclick to set the play state
    handleclick= () => {
        this.setState({
            play: this.state.play ? false : true
        })
    }

    render() {
        return (
            <>
                <Animate
                play={this.state.play} // Toggle when animation should start
                // duration={2}
                // keyframes={["opacity: 0", "opacity: 1"]}
                // iterationCount="1"
                // direction="reverse"
                end={{ opacity: 1, filter: 'blur(0)' }}
                start={{ opacity: 0, filter: 'blur(10px)' }}
                >
                    <p>Hello</p>

                </Animate>

                <button
                    onClick={this.handleclick}
                >
                    Play
                </button>
            </>
        );
    }
}

export default AnimationTest;

