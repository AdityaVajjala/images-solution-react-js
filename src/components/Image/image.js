import React, { Component } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "./image.scss";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      key: props.key,
      imageURL: props.url,
      deleted: props.deleted,
      altText: props.altText,
      informParent: props.deletedFunction
    };
    this.style = {
      backgroundImage: `url(${this.state.imageURL})`,
      backgroundSize: "cover"
    };
  }

  deleteImage = () => {
    this.setState({
      id: this.state.id,
      imageURL: this.state.imageURL,
      deleted: true,
      altText: this.state.altText,
      deletedFunction: this.deletedFunction
    });
    this.state.informParent(this.state.id);
  };

  render() {
    return (
      <div className="image-container" style={this.style}>
        <div className="image-actions">
          <IoMdCloseCircle onClick={this.deleteImage} />
        </div>
        <img
          className="image"
          src={this.state.imageURL}
          alt={this.state.altText}
        />
      </div>
    );
  }
}
