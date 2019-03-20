import React, { Component } from "react";

export default class Notifcation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notification: props.notification
    };
  }

  render() {
    return (
        <div className={this.state.notification.type}>{this.state.notification.message}</div>
    );
  }
 
}
