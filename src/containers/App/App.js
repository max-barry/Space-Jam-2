import React, { Component } from 'react';
import styled from 'react-emotion';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from '../Home';
import stars from '../../images/bg_stars.png';
import BasicContent from '../BasicContent';

const Container = styled('main')({
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    minHeight: '100vh',
    minWidth: '100vw',
    '&.lazyloaded::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `url(${stars})`,
        backgroundSize: '9%',
        pointerEvents: 'none'
    }
});

class App extends Component {
    render = () => (
        <TransitionGroup style={{ position: 'relative' }}>
            <CSSTransition
                key={this.props.location.key}
                timeout={620}
                classNames="transition"
            >
                <Container className="lazyload">
                    <Switch location={this.props.location}>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/basic-content"
                            component={BasicContent}
                        />
                    </Switch>
                </Container>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(App);
