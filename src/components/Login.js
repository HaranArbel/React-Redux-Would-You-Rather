import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

import {
    Form,
    Header,
    Image,
    Segment,
    Grid
} from 'semantic-ui-react';

function Login({users, setAuthedUser}) {

    const [value, setValue] = useState('')
    const disabled = value === '' ? true : false;

    const onChange = (e, {value}) => {
        setValue(value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setAuthedUser(value)
    };

    const generateDropdownData = () => {
        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: {avatar: true, src: user.avatarURL}
        }));
    };

    return (
        <div className="Login">
            <Grid>
                <Segment padded="very">
                    <Header as="h1" textAlign="center">
                        Welcome to the Would You Rather App!
                    </Header>
                    <Header as="h2" textAlign="center">
                        Please sign in to continue
                    </Header>
                    <Image centered size="small" src="/images/avatars/tiger.jpg" alt="login image"/>
                    <Form onSubmit={handleSubmit}>
                        <Header as="h2" color="grey" textAlign="center">
                            Sign In
                        </Header>
                        <Form.Dropdown
                            placeholder="Select a user"
                            fluid
                            selection
                            scrolling
                            options={generateDropdownData()}
                            value={value}
                            onChange={onChange}
                            require
                        />
                        <Form.Button content="Login" positive disabled={disabled} fluid/>
                    </Form>
                </Segment>
            </Grid>
        </div>
    );
}

function mapStateToProps({users}) {
    return {
        users: Object.values(users)
    };
}

export default connect(
    mapStateToProps,
    {setAuthedUser}
)(Login);
