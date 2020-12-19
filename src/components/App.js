import { Component } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Strategy from './Strategy.js';
import Contribute from './Contribute.js';
import About from './About.js'
import Footer from './Footer.js';

//Create App!
class App extends Component {
  constructor() {
    super();
    this.state = {
        //array from which a random card will be drawn
        strategyArray: [],
        //error object for error handling - if the result is undefined, set state for the error and pass it as props to the RandomStrategy component.
        errorApi: {
          author: '',
          cardnumber: null, 
          edition: null, 
          strategy: ''}
    }
  }

  //Call the Oblique strategy API to get all the strategies
  componentDidMount(){
    axios({
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
        // If successful, setState of the array
        this.setState({
            strategyArray: result.data
        })
        
      //If unsuccessful:
    }).catch(() => {
      //Have an error message that can be displayed on the card is the API call fails. Pass it as a prop to the RandomStrategy component.
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

        < Strategy 
          coverCard='Over One Hundred Worthwhile Dilemmas'
          errorMsg={this.state.errorApi}
          cardArray={this.state.strategyArray}
        />
      
        < Contribute />

        < About />
      
      </main>

      < Footer />

    </div>

    );
  }
}

export default App;


//pass in as prop (coverCard) = 'Over One Hundred Worthwhile Dilemmas'
//and 
//'Draw a card from the Collective Strategies deck'