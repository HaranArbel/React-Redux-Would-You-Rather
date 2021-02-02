import React from 'react'
import {connect} from "react-redux";
import UserCard from "./UserCard";
import {Tab, Grid} from "semantic-ui-react";


function Home({userQuestionData}) {

    const panes = [
        {
            menuItem: 'Unanswered', render: () => (
                <Tab.Pane>
                    {userQuestionData.answered.map(question => (
                        <UserCard
                            key={question.id}
                            qid={question.id}
                            unanswered={true}
                        />
                    ))}
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Answered', render: () => (
                <Tab.Pane>
                    {userQuestionData.unanswered.map(question => (
                        <UserCard
                            key={question.id}
                            qid={question.id}
                            unanswered={false}
                        />
                    ))}
                </Tab.Pane>
            )
        }
    ];

    return (
        <Grid centered padded>
            <Tab panes={panes}/>
        </Grid>
    )
}


function mapStateToProps({authedUser, users, questions}) {
    const answeredIds = Object.keys(users[authedUser].answers);
    const answered = Object.values(questions)
        .filter(question => !answeredIds.includes(question.id))
    const unanswered = Object.values(questions)
        .filter(question => answeredIds.includes(question.id))

    return {
        userQuestionData: {
            answered,
            unanswered
        }
    };
}

export default connect(mapStateToProps)(Home);

