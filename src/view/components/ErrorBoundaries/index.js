import React, { Component } from 'react';

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.warn(error, errorInfo);
  }
  render() {
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundaries;