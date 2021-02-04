import React from 'react';
import {connect} from 'react-redux';
import {
    Segment,
    Grid,
    Header,
    Image,
    Label,
    Divider
} from 'semantic-ui-react';

function Leaderboard({topPlayersData}) {

    return (
        <Grid centered padded>
            {topPlayersData.map((user, idx) => (
                <Card user={user} idx={idx}></Card>
            ))}
        </Grid>
    );
}

function Card({user, idx}) {
    const trophyColor = ['yellow', 'grey', 'orange'];

    return (
        <Segment.Group key={user.id}>
            <Label corner="left" icon="trophy" color={trophyColor[idx]}/>
            <Grid divided padded>
                <Grid.Row>
                    <PlayerImage user={user}/>
                    <QuestionCount user={user}/>
                    <Score user={user}/>
                </Grid.Row>
            </Grid>
        </Segment.Group>
    );

}

function QuestionCount({user}) {
    return (
        <Grid.Column width={8}>
            <Header as="h3" textAlign="left">
                {user.name}
            </Header>
            <Grid>
                <Grid.Column width={12}>Answered questions</Grid.Column>
                <Grid.Column width={4}>{user.numAnswered}</Grid.Column>
            </Grid>
            <Divider/>
            <Grid>
                <Grid.Column width={12}>Created questions</Grid.Column>
                <Grid.Column width={4}>{user.numCreated}</Grid.Column>
            </Grid>
        </Grid.Column>
    );
}

function PlayerImage({user}) {
    return (
        <Grid.Column width={4} verticalAlign="middle">
            <Image src={user.avatarURL}/>
        </Grid.Column>
    );
}

function Score({user}) {
    return (
        <Grid.Column width={4} textAlign="center">
            <Segment.Group>
                <Header as="h5" block attached="top" content="Score"/>
                <Segment>
                    <Label circular color="pink" size="big">
                        {user.score}
                    </Label>
                </Segment>
            </Segment.Group>
        </Grid.Column>
    );
}

function mapStateToProps({users}) {
    const topPlayersData = Object.values(users)
        .map(user => {
            const numAnswered = Object.values(user.answers).length;
            const numCreated = user.questions.length;
            return (
                {
                    id: user.id,
                    name: user.name,
                    avatarURL: user.avatarURL,
                    numAnswered: numAnswered,
                    numCreated: numCreated,
                    score: numAnswered + numCreated
                });
        })
        .sort((a, b) => a.score - b.score)
        .reverse()
        .slice(0, 3);
    return {
        topPlayersData
    };
}

export default connect(mapStateToProps)(Leaderboard);