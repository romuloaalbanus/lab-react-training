import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    click: false,
  };

  changeImg = () => {
    this.setState(({ click }) => ({ click: !click }));
  };

  render() {
    return (
      <div className="imageClick">
        <img
          className="image"
          src={this.state.click ? this.props.imgClicked : this.props.img}
          onClick={this.changeImg}
          alt="imageClick"
        />
      </div>
    );
  }
}

export default ClickablePicture;
