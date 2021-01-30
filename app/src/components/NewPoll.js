import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux';

import {
    Form,
    Header,
    Divider,
    Loader,
    Dimmer
} from 'semantic-ui-react';
import { handleSaveQuestion } from "../actions/questions";

function NewPoll({ authedUser, handleSaveQuestion }) {

    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const disabled = optionOne === '' || optionTwo === '' ? true : false;

    const handleOptionsOneChange = (e, {value}) => {
        setOptionOne(value);
    };
    const handleOptionsTwoChange = (e, {value}) => {
        setOptionTwo(value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        handleSaveQuestion(optionOne, optionTwo, authedUser).then(() => {
            setOptionOne('')
            setOptionTwo('')
            setIsLoading(false)
        })

    };

    return (
        <div className="NewPoll">
            {isLoading && (
              <Dimmer active inverted>
                <Loader content="Updating" />
              </Dimmer>
            )}
            <h2>Complete the question:</h2>
            <Header color='blue'>Would you rather...</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    id="optionOne"
                    placeholder="Enter first option..."
                    value={optionOne}
                    onChange={handleOptionsOneChange}
                    required
                />
                <Divider horizontal>Or</Divider>
                <Form.Input
                    id="optionTwo"
                    placeholder="Enter second option..."
                    value={optionTwo}
                    onChange={handleOptionsTwoChange}
                    required
                />
                <Form.Button content="submit" positive disabled={disabled} fluid/>
            </Form>
        </div>
    );
}

function mapStateToProps( {authedUser}) {
    return {
        authedUser: authedUser
    };
}

export default connect(
    mapStateToProps,
    { handleSaveQuestion}
)(NewPoll);
