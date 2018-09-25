import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import RadialMenu from './RadialMenu';
import IconButton from '../Buttons/IconButton';
import jamlogo from '../../images/logos/jamlogo.gif';
import { planetPaths, planetWiggleMap } from '../../settings';

const dummyPlanetButtons = planetPaths.map(
    ([label, path, activePath], i) =>
        console.log(path) || (
            <IconButton
                key={`plane_${i}`}
                label={label}
                ifNotActive={path}
                ifActive={activePath}
            />
        )
);

storiesOf('Grids', module)
    .addDecorator(centered)
    .add('Grids.RadialMenu', _ => (
        <RadialMenu
            style={{ maxWidth: 540 }}
            items={dummyPlanetButtons}
            wiggleMap={planetWiggleMap}
        >
            <img src={jamlogo} />
        </RadialMenu>
    ));
