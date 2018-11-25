import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // This is the first way that we can do it with a .then
  // onSearchSubmit(term) {
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID ec0b8c9e21ac22451a99a46c4253be8771529ce79470af15770ba521f2c02b00"
  //       }
  //     })
  //     .then(response => {
  //       const { results } = response.data;
  //       console.log("the results are : ", results);
  //     });
  // }
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID ec0b8c9e21ac22451a99a46c4253be8771529ce79470af15770ba521f2c02b00"
      }
    });
    console.log("response.data.results are: ", response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
