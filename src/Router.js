import React from 'react';
import {Switch, Route} from 'react-router-dom';
import OpeningScreen from './components/OpeningScreen/OpeningScreen';
import Featured from "../components/Featured";
import Map from './components/Map';
import Search from './components/Search';
import OpeningScreen from './components/OpeningScreen/OpeningScreen';

const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={OpeningScreen} />
            <Route path="../components/Featured" component={Featured} />
            <Route path="./Map" component={Map} />
            <Route path="./Search" component={Search} />
            <Route path="./OpeningScreen" component={OpeningScreen} />
        </Switch>
    );
}

export default Router;