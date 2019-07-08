import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import LogIn from "./components/LogIn/LogIn"
// import LeftComponent from './components/LeftComponent/LeftComponent';
// import RightComponent from "./components/RightComponent/RightComponent";
// import Header from './components/Header';
// import LeftComponent from './components/LeftComponent';

const Router = () => {
    return(
        <Switch>
            {/* <Route exact path="/" component={OpeningScreen} /> */}
            <Route path="./Header" component={Header} />
            <Route path="./Login" component={LogIn} />
            {/* <Route path="./RightComponent" component={RightComponent} /> */}
        </Switch>
    );
}

export default Router;