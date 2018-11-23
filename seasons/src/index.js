import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THis is the only time we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // to update our state object -> we called setState
        this.setState({ lat: position.coords.latitude });
        console.log("The state is: ", this.state.lat);
      },
      err => console.log(err)
    );
  }

  //React says we must define render()!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
