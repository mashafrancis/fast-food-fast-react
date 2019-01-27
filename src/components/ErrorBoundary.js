import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // eslint-disable-next-line no-console
    console.log("error", error);

    // Update state so the next render will show the fallback UI declared in render.
    return { hasError: true };
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Oops! Sorry, that failed.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
