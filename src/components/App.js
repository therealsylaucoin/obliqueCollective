import { Component } from 'react';
import Axios from 'axios';
import Header from './Header.js';
import RandomStrategy from './RandomStrategy.js';
import Contribute from './Contribute.js';
import About from './About.js'
import Footer from './Footer.js';
import AnimationTest from './AnimationTest.js'


// Oblique Strategies:
// 1. SETUP: The app state is an empty array, so that later we can set the state to the array we will get from the API call
// In componentDidMount - Make call to the oblique strategies API to get an array of all the cards. setState to the new array
// Declare a getRandom function in order to be able to obtain a randomIndex and pass that into a function that will draw a random card.

// 2. User clicks on "draw card" button (event handler on the button that calls a drawCard function)
// 3. The "draw card" button calls the drawCard function (passing it the randomIndex as an argument) in order to obtain a single random card (setState to the random card - an object)
// 5. The random card is displayed on the page (render).
// 6. The user has the option to draw again, by clicking the "draw card" button which will call the function again.

// Stretch Goals:
// 1. Allow users to create their own strategies and add them to a deck which is stored on Firebase (import JSON file of original deck):
// 	"Contribute to collective deck" a tag brings user to a creation form. Form includes:
// 		Author/Name (text field - optional)
// 		Strategy (text box - required)
// 		Submit button
// 	On submit, the createdCard object is pushed into the existing cards array (on Firebase)
// 	(Give these cards a distinctive look (background colour, perhaps) to visually differenciate them from the orignal cards in that deck)


class App extends Component {
  constructor() {
    super();
    this.state = {
        //empty array from which a random card will be draw
        strategyArray: [],
        //Empty error object for error handling - if the result is undefined, set state for the rror and pass it as props to RandomStrategy
        errorApi: {
          author: '',
          cardnumber: null, 
          edition: null, 
          strategy: ''}
    }
  }

//Call the Oblique strategy API to get all the strategies
  componentDidMount(){
    Axios({
        url: 'https://proxy.hackeryou.com',
        method: 'GET',
        responseType: 'json',
        params: {
            reqUrl: 'http://brianeno.needsyourhelp.org/all',
            proxyHeaders: {
                'header_params': 'value'
            },
            xmlToJSON: false
        }

    }).then((result) => {

        // If successful, setState to the array
        this.setState({
            strategyArray: result.data
        })
        
      //If unsuccessful:
    }).catch(() => {
      //Have an error message that can be displayed on the card is the API call fails. Pass it as a prop to random strategy.
      this.setState({
        errorApi: {
          author: 'Unavailable',
          cardnumber: null, 
          edition: null, 
          strategy: "Oops! We can't seem to reach the network right now. Tweet this message to let us know. Thx! @sylaucoin"}
      })
    })
}

  render() {
    return (

      <div className="app">


      < Header />

      <main>

        < RandomStrategy
          strategyArray={this.state.strategyArray}
          errorMsg={this.state.errorApi}/>
      
        < Contribute />

        < About />
          
      </main>

      < Footer />

      < AnimationTest />

    </div>

    );
  }
}

export default App;