import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Error404 } from "../Error404/error404";
import ImagesPreview from "../ImagesPreview/ImagesPreview";
import ImageUpload from "../ImageUpload/ImageUpload";

export class RouterConfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ImagesPreview} />
          <Route exact path="/images/all" component={ImagesPreview} />
          <Route exact path="/upload/image" component={ImageUpload} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default RouterConfig;
