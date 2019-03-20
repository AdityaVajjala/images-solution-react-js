import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./ImageUpload.scss";
import ImagesService from "../../services/imagesService";
import { NotificationManager } from "react-notifications";
import Loader from "react-loader-spinner";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.imageService = new ImagesService();
    this.state = {

    }
  }
  render() {
    let loading = <div />;
    if (this.state.loading) {
      loading = <div className="loader"><Loader type="Puff" color="#00BFFF" height="100" width="100" /></div>;
    }
    return (
      <div className="image-upload-wrapper">
        {loading}
        <div className="upload-btn-wrapper">
          <Button variant="primary"> Upload Images </Button>
          <input
            type="file"
            name="myfile"
            accept="image/png,image/gif,image/jpeg"
            multiple
            onChange={this.addImages}
          />
        </div>
      </div>
    );
  }

  addImages = eve => {
    var files = eve.target.files;
    this.setState({
      loading: true
    });
    NotificationManager.info("Started uploading images..");
    let promise = this.imageService.uploadImages(files);
    promise
      .then(e => {
        NotificationManager.success(`Uploaded ${files.length} images..`);
      })
      .catch(e => {
        NotificationManager.error("Unable to upload images..");
      });
  };
}

export default ImageUpload;
