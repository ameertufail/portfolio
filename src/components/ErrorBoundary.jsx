import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Component stack:", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when error occurs
      return (
        <div className='w-full h-full flex items-center justify-center'>
          <div className='text-white bg-tertiary p-5 rounded-lg'>
            <h2 className='text-xl font-bold mb-2'>Something went wrong rendering this component</h2>
            <p className='text-sm text-secondary'>{this.state.error?.message || "Unknown error"}</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 