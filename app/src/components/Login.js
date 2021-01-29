import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux';
import { setAuthedUser } from '../actions/authUser';

import {
    Form,
    Header
} from 'semantic-ui-react';

function Login(props) {

    const [value, setValue] = useState(null)
    const disabled = value === '' ? true : false;

    const handleSubmit = () => {

    }

    const onChange = () => {

    }

    const generateDropdownData = () => {

        // const users = [
        //     {
        //         id: 'sarahedo',
        //         name: 'Sarah Edo',
        //         avatarURL: '/images/avatars/tiger.jpg',
        //     },
        //     {
        //         id: 'sarahedo',
        //         name: 'Sarah Edo',
        //         avatarURL: '/images/avatars/tiger.jpg',
        //     },
        //
        // ]
        const { users } = props
        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: {avatar: true, src: user.avatarURL}
        }));
    };


    return (

        // <div className="Login-Container">
        <div className="Login-box">
            <h1>Welcome to the Would You Rather App!</h1>
            <h2>Please sign in to continue</h2>
            <img className="Login-Image" src="/images/avatars/tiger.jpg" alt="login image"/>
            <Form onSubmit={handleSubmit}>
                <Header as="h2" color="blue">
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
        </div>
        // </div>
    );
}
//
// function mapStateToProps(state){
//     return {
//         users: Object.values(state.users)
//     }
// }
//
// export const ConnectedLogin = connect(mapStateToProps)(Login)


const ConnectedLoginForm = connect(
  mapStateToProps,
  { setAuthedUser }
)(Login);

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default Login;
