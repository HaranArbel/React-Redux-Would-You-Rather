import React, {useState} from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {
    Header,
    Button
} from "semantic-ui-react";

function PollQuestion({question, unanswered}) {

    const [value, setValue] = useState('')

    const disabled = value === '' ? true : false;
    // const buttonColor = unanswered === true ? "\#21ba45" : "\#33F0FF";
    const buttonColor = unanswered === true ? `green` : `blue`;
    // const buttonColor = unanswered === true ? "#21ba45" : "#2185d0";
    const buttonContent = unanswered === true ? 'Answer Poll' : 'Results';

    const handleOnClick = (e, {value}) => {
        setValue(value);
    };

    return (
        <div>
            <Header as="h5" textAlign="left">
                Would you rather
            </Header>
            <p style={{textAlign: 'center'}}>
                {question.optionOne.text}
                <br/>
                or...
            </p>

            <Link to={`/questions/${question.id}`}>
                <Button
                    color={buttonColor}
                    size="tiny"
                    fluid
                    onClick={handleOnClick}
                    content={buttonContent}
                />
            </Link>
        </div>
    );
}


function mapStateToProps({authedUser}) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps)(PollQuestion);
