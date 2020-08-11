import React, { Component } from 'react';

/*const ClickablePicture = ({ img, imgClicked }) => {
  return (
    <div className="ClickablePicture">
      <div>
        <img onClick={imgClicked} src={img} alt="random-guy" />
      </div>
    </div>
  );
};*/

class ClickablePicture extends Component {
  constructor(props) {
    super();
    this.state = {
      imagedClicked: true,
    };
  }

  handleImageClick = () => {
    this.setState({ imagedClicked: !this.state.imagedClicked });
  };

  render() {
    const { imgClicked, img } = this.props;

    return (
      <div className="ClickablePicture">
        <div>
          <img
            onClick={this.handleImageClick}
            src={this.state.imagedClicked ? img : imgClicked}
            alt="random-guy"
          />
        </div>
      </div>
    );
  }
}

export default ClickablePicture;
