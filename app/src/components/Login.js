import React from 'react'
import {useState} from 'react'
import {
    Form,
    Header
} from 'semantic-ui-react';

function Login() {

    const [value, setValue] = useState(null)
    const [users, setUsers] = useState(null)
    const disabled = value === '' ? true : false;

    const handleSubmit = () => {

    }

    const onChange = () => {

    }

    const generateDropdownData = () => {

        const users = [
            {
                id: 'sarahedo',
                name: 'Sarah Edo',
                avatarURL: '/images/avatars/tiger.jpg',
            },
            {
                id: 'sarahedo',
                name: 'Sarah Edo',
                avatarURL: '/images/avatars/tiger.jpg',
            },

        ]
        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: {avatar: true, src: user.avatarURL}
        }));
    };


    return (

        <div className="Login">
            <h1>Welcome to the Would You Rather App!</h1>
            <h2>Please sign in to continue</h2>
            <img src="/images/avatars/tiger.jpg" alt="login image"/>
            <Form onSubmit={handleSubmit}>
                <Header as="h2" color="blue">
                    Sign In
                </Header>
                <Form.Dropdown
                    placeholder="Select a user"
                    fluid
                    selection
                    scrolling
                    options={generateDropdownData(users)}
                    value={value}
                    onChange={onChange}
                    required
                />
                <Form.Button content="Login" positive disabled={disabled} fluid/>
            </Form>
        </div>
    );
}

export default Login;
