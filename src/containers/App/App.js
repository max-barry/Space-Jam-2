import React, { Component } from 'react';
import Home from '../Home/Home';
import styled from 'react-emotion';

const Container = styled('main')({
    backgroundColor: 'black'
});

class App extends Component {
    render = () => (
        <Container>
            <Home />
        </Container>
    );
}

export default App;
