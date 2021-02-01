import React from 'react'
import {connect} from "react-redux";
import {
    Header,
    Grid,
    Segment,
    Image,
} from "semantic-ui-react";
import PollTeaser from "./PollTeaser";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";

const PollStatus = {
    POLL_TEASER: 'POLL_TEASER',
    POLL_QUESTION: 'POLL_QUESTION',
    POLL_RESULT: 'POLL_RESULT'
}

const PollContent = ({pollStatus, question, unanswered}) => {
    switch (pollStatus) {
        case PollStatus.POLL_TEASER:
            return <PollTeaser question={question} unanswered={unanswered}/>;
        case PollStatus.POLL_QUESTION:
            return <PollQuestion question={question}/>;
        case PollStatus.POLL_RESULT:
            return <PollResult question={question}/>;
        default:
            return;
    }
};


function UserCard({question, author, pollStatus, unanswered, qid}) {

    return (
        <div className="UserCard">
            <Segment>
                <Header
                    as="h4"
                    textAlign="left"
                    block
                    attached="top"
                    style={{borderTop: `1px solid grey`}}
                >
                    {author.name} asks:
                </Header>

                <Grid divided padded>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image size="small" src={author.avatarURL}/>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <PollContent
                                pollStatus={pollStatus}
                                question={question}
                                unanswered={unanswered}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
}

function mapStateToProps({authedUser, users, questions}, {qid, match}) {

    let question, author, pollStatus;
    if (qid !== undefined) {
        question = questions[qid];
        author = users[question.author];
        pollStatus = PollStatus.POLL_TEASER;
    } else {
        const {question_id} = match.params;
        question = questions[question_id];
        const user = users[authedUser];
        author = users[question.author];
        pollStatus = PollStatus.POLL_QUESTION;
        if (Object.keys(user.answers).includes(question.id)) {
            pollStatus = PollStatus.POLL_RESULT;
        }
    }

    return {
        question,
        author,
        pollStatus,
    };
}

export default connect(mapStateToProps)(UserCard);

