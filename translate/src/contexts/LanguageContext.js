import React from "react";

const Context = React.createContext();

export class LanguageStore extends React.Component {
  state = { language: "english", color: "primary" };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
