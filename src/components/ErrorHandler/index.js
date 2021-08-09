import React from 'react';
import PropTypes from 'prop-types';

import './ErrorHandler.css';

const ErrorHandler = ({ message }) => {
  return (
    <div className="ErrorHandler">
      <span data-testid="errorMessage">{message}</span>
    </div>
  );
};

ErrorHandler.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorHandler;
