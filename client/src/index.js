import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/grails.css';
import './css/main.css';
import { Route,BrowserRouter, Switch } from "react-router-dom";

import Home from './pages/Home';
import AppNav from './AppNav';
import store from "./redux/store";
import { Provider } from "react-redux";


function Index(props) {
    const [collapse,setCollapse] = React.useState(false);
    const toggle = () => {
        setCollapse(!collapse);
    }
return(<BrowserRouter forceRefresh={true}>
    <AppNav collapse={collapse} toggle={toggle} />
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>


    </Switch>
    
    </BrowserRouter>
    );
}

ReactDOM.render( <Provider store={store}><Index /></Provider>, document.getElementById('root'));