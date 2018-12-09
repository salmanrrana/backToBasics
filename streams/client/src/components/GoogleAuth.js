import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "919294523284-jdcmv6gbtnbh333spvbgsosrnu7fj9ht.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          // now that we have finished initializing the  gapi library

          // we are going to assign the auth instance to this.auth
          this.auth = window.gapi.auth2.getAuthInstance();
          // update our auth state in our Redux store
          this.onAuthChange(this.auth.isSignedIn.get());
          // wait to see if the authentication status will change in the future
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // This calls on the appropriate action creator anytime our state
  // changes according to the gapi library
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
