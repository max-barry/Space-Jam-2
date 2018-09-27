import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { RadialMenu } from '../../components/Grids';
import { planetWiggleMap, planetPaths } from '../../settings';
import IconButton from '../../components/Buttons/IconButton';
import jamlogo from '../../images/logos/jamlogo.gif';
import Img from '../../components/Performance/Img';

const planetMenuItems = planetPaths.map(([label, path, activePath], i) => (
    <IconButton
        key={`plane_${i}`}
        label={label}
        ifNotActive={path}
        ifActive={activePath}
    />
));

const Container = styled('div')({
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

class Home extends Component {
    render = _ => (
        <Container>
            <RadialMenu
                style={{ maxWidth: 500, width: '100%' }}
                items={planetMenuItems}
                wiggleMap={planetWiggleMap}
            >
                <Img alt="Space Jam logo" src={jamlogo} x={272} y={165} />
            </RadialMenu>
        </Container>
    );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
