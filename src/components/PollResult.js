import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    Header,
    Segment,
    Progress,
    Label,
    Button,
    Icon
} from 'semantic-ui-react';

const YourVoteLabel = () => (
    <Label color="violet" ribbon="right" className="vote">
        <Icon name="thumbs up" size="big" className="compact"/>
        <div style={{float: 'right'}}>
            Your
            <br/>
            Vote
        </div>
    </Label>
);

function PollResult({question, user, history}) {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

    const secondary = {color: 'teal'}
    const primary = {color: 'yellow'}
    let optionOne = secondary,
        optionTwo = secondary;

    optionOneVotes > optionTwoVotes ? optionOne = primary : optionTwo = primary;

    const handleOnClick = () => {
        history.push('/');
    };

    return (
        <div>
            <Header as="h3">
                Results:
                <Header.Subheader style={{fontWeight: 'bold'}}>
                    Would you rather
                </Header.Subheader>
            </Header>
            <VotesCard
                option={optionOne}
                showYourVote={userVote === 'optionOne'}
                answer={question.optionOne.text}
                totalVotes={totalVotes}
                votes={optionOneVotes}
            />
            <VotesCard
                option={optionTwo}
                showYourVote={userVote === 'optionTwo'}
                answer={question.optionTwo.text}
                totalVotes={totalVotes}
                votes={optionTwoVotes}
            />
            <Button color="pink" size="tiny" floated="right" onClick={handleOnClick}>
                Back
            </Button>
        </div>
    )
}

function VotesCard({option, showYourVote, answer, totalVotes, votes}) {
    return (
        <Segment
            color={option.color}
            style={{backgroundColor: showYourVote ? '#f4f4f4' : ''}}
        >
            {showYourVote === true && <YourVoteLabel/>}
            <p style={{fontWeight: 'bold'}}>{answer}</p>
            <Progress
                percent={((votes / totalVotes) * 100).toFixed(2)}
                progress
                color={option.color}
            >
                {votes} votes
            </Progress>
        </Segment>
    );
}

function mapStateToProps({users, authedUser}) {
    const user = users[authedUser];
    return {
        user
    };
}

export default withRouter(connect(mapStateToProps)(PollResult));