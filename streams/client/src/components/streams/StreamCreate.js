import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // This function is informing the form what values to place in the form
  // Also giving particular className to div if an error is found
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  // This function will create the stream
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      // the this.props.handleSubmit() is from redux-form
      // and we pass onSubmit callback function
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button promary">Submit</button>
      </form>
    );
  }
}

// This function is lettig the form know what an error is
// and what the error message is
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    // only run if the user did not enter a title
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// This is creating a variable that will help us wire up reduxForm
// and connect on the same component at the same time
const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
