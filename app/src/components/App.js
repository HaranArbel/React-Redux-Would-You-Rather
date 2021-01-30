import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom';
import {useEffect} from 'react'
import {connect} from 'react-redux';
import Home from './Home';
import Login from './Login';
import handleInitialData from "../actions/shared";
import LoadingBar from "react-redux-loading";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";

function App({handleInitialData, authedUser}) {

    useEffect(() => {
        handleInitialData()
    }, [])

    return (
        <div className="App">
            <LoadingBar/>
            {authedUser === null ?
                <Route path="/" component={Login}/>
                :
                <div className="Content">
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/add' component={NewPoll}/>
                        <Route path='/leaderboard' component={Leaderboard}/>
                    </Switch>
                </div>
            }
        </div>
    );
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    };
}

export default connect(
    mapStateToProps,
    {handleInitialData}
)(App);
