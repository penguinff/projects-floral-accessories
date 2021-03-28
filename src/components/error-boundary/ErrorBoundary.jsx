import React from 'react';

import ErrorMessage from '../error-message/ErrorMessage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDitCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorMessage message='Something went wrong' />
      )
    }

    return this.props.children;
  }

}

export default ErrorBoundary;