import BaseService from "./baseService";
import axios from "axios";

export default class ImageService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.fetchImagesPath = "/images";
    this.deleteImagesPath = "/delete/image";
    this.imageUploadPath = "/upload/image";
  }

  fetchImages = () => {
    return axios({
      method: "GET",
      url: `${this.baseURL}${this.fetchImagesPath}`,
      contentType: "json"
    })
      .then(e => {
        e = e.data;
        let images = this._formatImages(e.Name, e.Contents);
        return {
          images: images,
          bucketName: e.Name
        };
      })
      .catch(e => {
        console.log(e);
        return undefined;
      });
  };

  deleteImage(id) {
    return axios.post(`${this.baseURL}${this.deleteImagesPath}`, {
      ObjectId: id
    });
  }

  uploadImage(image) {
    let formData = new FormData();
    formData.append("image", image);
    return axios({
      method: "POST",
      url: `${this.baseURL}${this.imageUploadPath}`,
      processData: false,
      contentType: false,
      data: formData
    });
  }

  uploadImages(images){
    let promise = undefined;
    for(let i = 0; i < images.length; i++){
      let img = images[i];
      if(promise === undefined){
        promise = this.uploadImage(img);
      } else {
        promise.then((img) => {
          let img1 = img;
          this.uploadImage(img1);
        })
      }
    }
    return promise;
  }

  _formatImages(name, contents = []) {
    let images = [];
    for (let i = 0; i < contents.length; i++) {
      images.push({
        id: contents[i].Key,
        url: `https://${name}.s3.ap-south-1.amazonaws.com/${contents[i].Key}`,
        deleted: false,
        altText: contents[i].Key
      });
    }
    return images;
  }
}
