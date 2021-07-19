import React, { Component, Fragment } from "react";
import CircularSpinner from "./Circular";

class ImageLoader extends Component {
  state = {
    src: `https://placeimg.com/295/295/any/tech?t=${new Date().getMilliseconds()}`,
    loaded: false
  };

  onImageLoaded = () => {
    this.setState({ loaded: true });
  };

  refreshImage = () => {
    this.setState({
      loaded: false,
      src: `https://placeimg.com/295/295/any/tech?t=${new Date().getMilliseconds()}`
    });
  };

  render() {
    const { src, loaded, error } = this.state;

    return (
      <Fragment>
        <div className="image-container">
          <img
            src={src}
            onLoad={this.onImageLoaded}
            onError={this.onImageError}
          />
          {!loaded && (
            <div className="image-container-overlay">
              <CircularSpinner />
            </div>
          )}
        </div>
        <div>
          <button onClick={this.refreshImage} className="button">
            Refresh Image
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ImageLoader;
