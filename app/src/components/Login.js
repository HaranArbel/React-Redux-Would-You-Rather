import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux';
import setAuthedUser from '../actions/authedUser';

import {
    Form,
    Header
} from 'semantic-ui-react';

function Login({users, setAuthedUser}) {

    const [value, setValue] = useState('')
    const disabled = value === '' ? true : false;

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (value == undefined){
    //         alert("the value is undefined :(")
    //     }
    //     if (e.target.value == undefined){
    //         alert("this value too is undefined :((")
    //     }
    //     setAuthedUser(value)
    // }
    //
    // const onChange = (e) => {
    //     e.preventDefault()
    //     const { value } = e.target
    //     setValue(value)
    // }

    const onChange = (e, {value}) => {
        setValue(value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        const authedUser = value;
        setAuthedUser(authedUser)
    };


    const generateDropdownData = () => {
        // const { users } = props
        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: {avatar: true, src: user.avatarURL}
        }));
    };

    console.log("value: " + value)

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

function mapStateToProps({users}) {
    return {
        users: Object.values(users)
    };
}

export default connect(
    mapStateToProps,
    {setAuthedUser}
)(Login);
