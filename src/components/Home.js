import React from 'react'
import {connect} from "react-redux";
import UserCard from "./UserCard";
import {Tab} from "semantic-ui-react";


function Home({userQuestionData}) {

    const panes = [
        {
            menuItem: 'Unanswered', render: () => (
                <Pane data={userQuestionData.unanswered} unanswered={true}/>
            )
        },
        {
            menuItem: 'Answered', render: () => (
                <Pane data={userQuestionData.answered} unanswered={false}/>
            )
        }
    ];

    return (
        <Tab panes={panes}/>
    )
}


function Pane({data, unanswered}) {
    return (
        <Tab.Pane>
            {data.map(question => (
                <UserCard
                    key={question.id}
                    qid={question.id}
                    unanswered={unanswered === true}
                />
            ))}
        </Tab.Pane>
    );
}

function mapStateToProps({authedUser, users, questions}) {
    const answeredIds = Object.keys(users[authedUser].answers);
    const answered = Object.values(questions)
        .filter(question => answeredIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = Object.values(questions)
        .filter(question => !answeredIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        userQuestionData: {
            answered,
            unanswered
        }
    };
}

export default connect(mapStateToProps)(Home);

