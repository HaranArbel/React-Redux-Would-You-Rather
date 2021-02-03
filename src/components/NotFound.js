import React from 'react';
import {Container, Header} from 'semantic-ui-react';

function NotFound() {
    return (
        <Container textAlign="center">
            <Header as="h3">Page Not Found 404 Error</Header>
            <p>Please go back to home page and try again.</p>
        </Container>
    );
}

export default NotFound;