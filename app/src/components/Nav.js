import React from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
} from 'semantic-ui-react';

function Nav() {
    return (
        <Menu as={Menu} pointing secondary>
            <Menu.Item name="home" as={Link} to="/"/>
            <Menu.Item name="new poll" as={Link} to="/add"/>
            <Menu.Item name="leaderboard" as={Link} to="/leaderboard"/>
        </Menu>
    );
}

export default Nav;
