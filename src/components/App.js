import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom';
import {useEffect} from 'react'
import {connect} from 'react-redux';
import handleInitialData from "../actions/shared";
import LoadingBar from "react-redux-loading";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import UserCard from "./UserCard";
import Nav from "./Nav";
import Home from './Home';
import Login from './Login';
import {
    Grid,
} from 'semantic-ui-react';
import NotFound from "./NotFound";

function App({handleInitialData, authedUser}) {

    useEffect(() => {
        handleInitialData()
    }, [])

    return (
        <div className="App">
            <LoadingBar/>
            {authedUser === null ?
                <ContentGrid>
                    <Route path='/' component={Login}/>
                </ContentGrid>
                :
                <div>
                    <Nav className="Nav"/>
                    <ContentGrid>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path="/questions/not_found" component={NotFound}/>
                            <Route path="/questions/:question_id" component={UserCard}/>
                            <Route path='/add' component={NewPoll}/>
                            <Route path='/leaderboard' component={Leaderboard}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </ContentGrid>
                </div>
            }
        </div>
    );
}

const ContentGrid = ({children}) => (
    <div className="Content">
        <Grid padded="vertically" columns={1} centered>
            <Grid.Row>
                <Grid.Column style={{maxWidth: 600}}>{children}</Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    };
}

export default connect(
    mapStateToProps,
    {handleInitialData}
)(App);
