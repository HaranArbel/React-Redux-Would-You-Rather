import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {
    Responsive,
    Grid,
    Menu,
    Image,
    Button,
} from 'semantic-ui-react';
import {connect} from "react-redux";
import {setAuthedUser} from '../actions/authedUser'

function Nav({users, authedUser, setAuthedUser}) {

    const handleLogout = e => {
        e.preventDefault()
        setAuthedUser(null)
    }

    return (
        <Menu
            fluid
            size="huge"
            pointing secondary
        >
            <Menu.Item name="home" as={NavLink} to="/" exact/>
            <Menu.Item name="new poll" as={NavLink} to="/add"/>
            <Menu.Item name="leaderboard" as={NavLink} to="/leaderboard"/>
            <Menu.Menu position="right">
                <Menu.Item>
                        <span>
                            <Image
                                src={users[authedUser].avatarURL}
                                avatar
                                size="mini"
                                verticalAlign="bottom"

                            />
                            {users[authedUser].name}
                        </span>
                </Menu.Item>
                <Menu.Item>
                    <Button
                        content="Logout"
                        labelPosition="right"
                        basic
                        compact
                        icon="log out"
                        size="huge"
                        onClick={handleLogout}
                    />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}


function mapStateToProps({authedUser, users}) {
    return {
        authedUser: authedUser,
        users: users
    };
}

export default connect(
    mapStateToProps,
    {setAuthedUser}
)(Nav);
