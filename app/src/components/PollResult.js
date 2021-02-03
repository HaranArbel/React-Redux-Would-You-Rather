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
    <Label color="orange" ribbon="right" className="vote">
        <Icon name="check circle outline" size="big" className="compact"/>
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
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

    const secondary = {color: 'grey', bgColor: '#f4f4f4'}
    const primary = {color: 'green', bgColor: '#honeydew'}
    let optionOne = secondary,
        optionTwo = secondary;

    optionOneVotes > optionTwoVotes ? optionOne = primary : optionTwo = primary;

    const handleClick = () => {
        history.push('/');
    };

    return (
        <Fragment>
            <Header as="h3">
                Results:
                <Header.Subheader style={{fontWeight: 'bold'}}>
                    Would you rather
                </Header.Subheader>
            </Header>
            <Segment
                color={optionOne.color}
                style={{backgroundColor: `${optionOne.bgColor}`}}
            >
                {userVote === 'optionOne' && <YourVoteLabel/>}
                <p style={{fontWeight: 'bold'}}>{question.optionOne.text}</p>
                <Progress
                    percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
                    progress
                    color={optionOne.color}
                >
                    {optionOneVotes} out of {votesTotal} votes
                </Progress>
            </Segment>
            <Segment
                color={optionTwo.color}
                style={{backgroundColor: `${optionTwo.bgColor}`}}
            >
                {userVote === 'optionTwo' && <YourVoteLabel/>}

                <p style={{fontWeight: 'bold'}}>{question.optionTwo.text}</p>
                <Progress
                    percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
                    progress
                    color={optionTwo.color}
                >
                    {optionTwoVotes} out of {votesTotal} votes
                </Progress>
            </Segment>
            <Button size="tiny" floated="right" onClick={handleClick}>
                Back
            </Button>
        </Fragment>
    )
}

function mapStateToProps({users, authedUser}) {
    const user = users[authedUser];
    return {
        user
    };
}

export default withRouter(connect(mapStateToProps)(PollResult));