import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { RadialMenu } from '../../components/Grids';
import { planetWiggleMap, planetPaths } from '../../settings';
import IconButton from '../../components/Buttons/IconButton';
import jamlogo from '../../images/logos/jamlogo.gif';
import Img from '../../components/Performance/Img';
import { Container } from './Home.styles';

const planetMenuItems = planetPaths.map(([label, path, activePath], i) => (
    <IconButton
        key={`plane_${i}`}
        label={label}
        ifNotActive={path}
        ifActive={activePath}
        to={'/basic-content'}
    />
));

class Home extends Component {
    render = _ => (
        <Container {...this.props}>
            <RadialMenu
                className="Home__navigation"
                style={{ maxWidth: 500, width: '100%' }}
                items={planetMenuItems}
                wiggleMap={planetWiggleMap}
            >
                <Img
                    className="Home__logo"
                    alt="Space Jam logo"
                    src={jamlogo}
                    x={272}
                    y={165}
                />
            </RadialMenu>
        </Container>
    );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
