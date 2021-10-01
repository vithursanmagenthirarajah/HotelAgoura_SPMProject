import React, { Component } from "react";
import { storage, firebase } from "./firebase";
class Fileupload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
    };
    this.onChangeImage = this.onChangeImage.bind(this);
  }
  onChangeImage(e) {
    this.setState(
      {
        files: e.target.files[0],
      },
      () => console.log(this.state.files)
    );
  }
  handleChange = (files) => {
    this.setState({
      files: files,
    });
  };

  handleSave = () => {
    let bucketName = "images";
    let file = this.state.files[0];
    console.log(this.state.files);
    let uploadTask = storage
      .ref(`${bucketName}/${this.state.files.name}`)
      .put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.files.name)
          .getDownloadURL()
          .then((url) => console.log(url));
      }
    );
  };
  showImage = () => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child("images/" + this.state.files[0].name);
    storageRef
      .child("images/" + this.state.files[0].name)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        document.getElementById("new-img").src = url;
      });
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.onChangeImage} />
        <button onClick={this.handleSave}>save</button>
        <button onClick={this.showImage}>Show</button>
        <img id="new-img" />
      </div>
    );
  }
}

export default Fileupload;
