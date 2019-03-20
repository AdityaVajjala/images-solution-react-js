import React, { Component } from "react";
import Image from "../Image/image";
import ImagesService from "../../services/imagesService";
import "./ImagesPreview.scss";
import { NotificationManager } from "react-notifications";

class ImagesPreview extends Component {
  constructor(props) {
    super(props);
    this.imagesService = new ImagesService();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    NotificationManager.info("Fetched images.", "Info");
    this.imagesService.fetchImages().then(res => {
      if (res) {
        this.setState({
          images: res.images
        });
        NotificationManager.success("Successfully fetched images.", "Sucess");
      } else {
        NotificationManager.error("Unable to connect to server...!", "Error");
      }
    });
  }
  render() {
    return (
      <div className="images-wrapper">
        <h1 className="heading">Images</h1>
        {this.renderImages()}
      </div>
    );
  }

  renderImages() {
    let images = [];
    for (let i = 0; i < this.state.images.length; i++) {
      let image = this.state.images[i];
      if (!image.deleted)
        images.push(
          <Image
            key={image.id}
            id={image.id}
            url={image.url}
            deleted={image.deleted}
            altText={image.altText}
            deletedFunction={this.deleteImage.bind(this)}
          />
        );
    }
    return images;
  }

  getImageById(id) {
    for (let i = 0; i < this.state.images.length; i++) {
      if (this.state.images[i].id === id) return this.state.images[i];
    }
  }

  deleteImage(id) {
    NotificationManager.info("Deleting image.", "Info");
    let image = this.getImageById(id);
    if (image) {
      image.deleted = true;
      this.setState({
        images: this.state.images
      });
      this.imagesService
        .deleteImage(id)
        .then(res => {
          NotificationManager.info("Successfully deleted image", "Info");
        })
        .catch(err => {
          this.sendNotification("Unable to delete the image", "Error");
        });
    }
  }
}

export default ImagesPreview;
