import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {
    Menu,
    Image,
    Button
} from 'semantic-ui-react';
import {connect} from "react-redux";

function Nav({ users, authedUser }) {

    const handleLogout = () => {

    }

    // alert("user is: " +authedUser)
    return (

        <div>
            <Menu size="large" as={Menu} pointing secondary>
                <Menu.Item name="home" as={NavLink} to="/" exact/>
                <Menu.Item name="new poll" as={NavLink} to="/add"/>
                <Menu.Item name="leaderboard" as={NavLink} to="/leaderboard"/>
                <Menu.Menu position="right">
                    <Menu.Item fitted="horizontally">
                        <Image
                            src={users[authedUser].avatarURL}
                            avatar
                            // spaced="right"
                            // verticalAlign="middle"
                            size="mini"
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Button
                            content="Logout"
                            // labelPosition="right"
                            // labelPosition="right"
                            basic
                            // compact
                            // icon="log out"
                            // size="big"
                            onClick={handleLogout}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
}


function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  };
}

export default connect(mapStateToProps)(Nav);
