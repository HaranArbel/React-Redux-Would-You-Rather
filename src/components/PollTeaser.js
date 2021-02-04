import React, {useState} from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {
    Header,
    Button
} from "semantic-ui-react";

function PollQuestion({question, unanswered}) {

    const buttonColor = unanswered === true ? `green` : `blue`;
    const buttonContent = unanswered === true ? 'Answer Poll' : 'Results';

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
                    fluid
                    size="tiny"
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
