import React, { Component } from 'react';
import styled from 'react-emotion';
import Home from '../Home';
import stars from '../../images/bg_stars.png';

const Container = styled('main')({
    backgroundColor: 'black',
    backgroundImage: `url(${stars})`,
    backgroundSize: '9%'
});

class App extends Component {
    render = () => (
        <Container>
            <Home />
        </Container>
    );
}

export default App;
