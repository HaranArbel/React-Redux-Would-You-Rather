import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux';

import {
    Form,
    Header,
    Divider,
    Loader,
    Dimmer,
    Segment
} from 'semantic-ui-react';
import {handleSaveQuestion} from "../actions/questions";

function NewPoll({authedUser, handleSaveQuestion, history}) {

    const [optionOneText, setOptionOne] = useState('')
    const [optionTwoText, setOptionTwo] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const disabled = optionOneText === '' || optionTwoText === '' ? true : false;

    const handleOptionsOneChange = (e, {value}) => {
        setOptionOne(value);
    };
    const handleOptionsTwoChange = (e, {value}) => {
        setOptionTwo(value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        handleSaveQuestion(optionOneText, optionTwoText, authedUser).then(() => {
            setOptionOne('')
            setOptionTwo('')
            setIsLoading(false)
            setFormSubmitted(true)
        })
    };

    if (formSubmitted) {
        history.push('/')
    }

    return (
        <div className="NewPoll">
            <Segment>
                {isLoading && (
                    <Dimmer active inverted>
                        <Loader content="Updating"/>
                    </Dimmer>
                )}
                <h2>Complete the question:</h2>
                <Header>Would you rather...</Header>
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        id="optionOne"
                        placeholder="Enter first option..."
                        value={optionOneText}
                        onChange={handleOptionsOneChange}
                        required
                    />
                    <Divider horizontal>Or</Divider>
                    <Form.Input
                        id="optionTwo"
                        placeholder="Enter second option..."
                        value={optionTwoText}
                        onChange={handleOptionsTwoChange}
                        required
                    />
                    <Form.Button content="submit" positive disabled={disabled} fluid/>
                </Form>
            </Segment>
        </div>
    );
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser
    };
}

export default connect(
    mapStateToProps,
    {handleSaveQuestion}
)(NewPoll);
