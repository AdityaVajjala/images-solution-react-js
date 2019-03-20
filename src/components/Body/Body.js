import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RouterConfig from "../Router/router";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <NotificationContainer />
          <RouterConfig />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Body;
