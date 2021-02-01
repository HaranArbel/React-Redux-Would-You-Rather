import React, {useState} from 'react'
import {connect} from "react-redux";
import {
    Form,
    Radio,
    Header
} from "semantic-ui-react";
import {handleSaveQuestionAnswer} from '../actions/users'

function PollQuestion({question, authedUser}) {

    const [value, setValue] = useState('')
    const disabled = value === '' ? true : false;

    const handleChange = (e, {value}) => {
        setValue(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleSaveQuestionAnswer(authedUser, question.id, value)
    };

    return (
        <div className="Poll">
            <Header as="h3">Would you rather</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Field
                    control={Radio}
                    label={question.optionOne.text}
                    value='optionOne'
                    checked={value === 'optionOne'}
                    onChange={handleChange}
                />
                <Form.Field
                    control={Radio}
                    label={question.optionTwo.text}
                    value='optionTwo'
                    checked={value === 'optionTwo'}
                    onChange={handleChange}
                />
                <Form.Button content="submit" positive disabled={disabled} fluid/>
            </Form>
        </div>
    );
}


function mapStateToProps({authedUser}) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps)(PollQuestion);

