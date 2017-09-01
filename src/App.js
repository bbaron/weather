import React, {Component} from 'react';
import './App.css';

const PLACES = [
  {name: "Millbrae", zip: "94030"},
  {name: "Hickory Corners", zip: "49060"},
  {name: "Princeton", zip: "61356"},
  {name: "Greenwood", zip: "64034"}
];

class WeatherDisplay extends Component {
  render() {
    return (
      <h1>Displaying weather for city {this.props.zip}</h1>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    }
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button key={index} onClick={
            () => {
              this.setState({activePlace: index})
            }
          }
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay
          key={activePlace}
          zip={PLACES[activePlace].zip}/>
      </div>
    );
  }
}

export default App;
