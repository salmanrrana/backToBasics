import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "919294523284-jdcmv6gbtnbh333spvbgsosrnu7fj9ht.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          // now that the gapi library is ready to go from the above
          // this code will do something once the library has been loaded
          // this.auth will give us an instance to log in/ log out/ check authentication status
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I Dont Know if we are signed In</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am Signed In!</div>;
    } else {
      return <div>I am not signed In </div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
