import React from "react";

class ResourceList extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.resource}</h1>
      </div>
    );
  }
}

export default ResourceList;
