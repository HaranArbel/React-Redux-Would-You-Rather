import React from 'react'
import {Route} from 'react-router-dom';
import {useEffect} from 'react'
import {connect} from 'react-redux';
import './App.css';
import Home from './Home';
import Login from './Login';
import handleInitialData from "../actions/shared";


function App({authedUser}) {

    useEffect(() => {
        handleInitialData()
    }, [])

    return (
        <div className="App">
            {authedUser !== null ?
                <Login/>
                :
                <Route exact_path='/' component={Home}/>
            }
        </div>
    );
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps, {handleInitialData})(App);
