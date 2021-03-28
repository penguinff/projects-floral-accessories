import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import ErrorMessage from '../error-message/ErrorMessage';

import styles from './error-boundary.module.scss';

import { ReactComponent as LeafGreenSpinner } from '../../assets/leaf-green-spinner.svg';

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