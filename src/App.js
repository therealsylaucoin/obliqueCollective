import { Component } from 'react';
import Axios from 'axios';
import RandomStrategy from './RandomStrategy.js';
import Header from './Header.js';
import About from './About.js';
import Contribute from './Contribute.js';
// import RandomCollectiveStrategy from './RandomCollectiveStrategy.js';
import Footer from './Footer.js';



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

// 2.Allow users to "like" individual strategies when they are drawn (only for the collective deck).


class App extends Component {
  constructor() {
    super();
    this.state = {
        //empty array from which a random card will be draw
        strategyArray: [],

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
        // setState to the array
        this.setState({
            strategyArray: result.data
        })
        console.log(result.data);
    })
}

  render() {
    return (
      <div className="app">

        < Header />

        < RandomStrategy strategyArray={this.state.strategyArray}/>

        < Contribute />

        < Footer />

      </div>
    );
  }
}

export default App;
