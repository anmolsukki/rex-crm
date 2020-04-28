import React from 'react';

class DefaultFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span><a href="https://coreui.io">CoreUI</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;
