import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.PropTypes = {
  // This component gets the task to displar through a React prop.
  // We can use PropTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
