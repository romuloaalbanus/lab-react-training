import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    like: 0,
  };

  clickIncrement = () => {
    this.setState({ like: this.state.like + 1 });

    //   clickDecrement = () => {
    //     if (this.state.like > 0){
    //     this.setState({ like: this.state.like - 1 });}
  };

  render() {
    return (
      <div className="like">
        <button
          className="btn-like"
          onClick={() => this.setState({ like: this.state.like + 1 })}
        >
          {' '}
          {this.state.like} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
