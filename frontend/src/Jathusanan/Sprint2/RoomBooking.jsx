import React, { Component } from "react";

export default class AddFoodItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeaDate = this.onChangeaDate.bind(this);
    this.onChangedDate = this.onChangedDate.bind(this);
    this.onChangeGuests = this.onChangeGuests.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      aDate: "",
      dDate: "",
      guest: "",
      type: "",
    };
  }
  onChangeaDate(e) {
    this.setState({ aDate: e.target.value });
  }
  onChangedDate(e) {
    this.setState({ dDate: e.target.value });
  }
  onChangeGuests(e) {
    this.setState({ guest: e.target.value });
  }

  onChangeType(e) {
    this.setState({ type: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const BookReq = {
      aDate: this.state.aDate,
      dDate: this.state.dDate,
      guest: this.state.guest,
      type: this.state.type,
    };
    console.log(BookReq);

    this.setState({
      aDate: "",
      dDate: "",
      guest: "",
    });
  }

  render() {
    return <div></div>;
  }
}
