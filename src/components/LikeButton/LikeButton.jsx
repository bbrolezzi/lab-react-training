import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  handleIncrementClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleIncrementClick}>
          Like {this.state.value}
        </button>
      </div>
    );
  }
}
export default LikeButton;
