import { BrowserRouter as Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

export class RouterConfig extends React.Component {
    constructor(props){
        super(props);
        this.state = {         
        }
    }

    render (){
        return (
        <Switch>
            <Route exact path="/" render={(props) => (
                <div>adsad</div>
            )}>
            </Route>
            <Route path="/images/all" render={(props) => (
                <div>asdasdas</div>
            )}/>
            <Route path="/upload/image" render={(props) => (
                <div>asdasdas</div>
            )} />
            <Route component={Error404} />
        </Switch>)
    }

}

