import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import IconButton from './IconButton';
import lunartunes from '../../images/planets/lunartunes.gif';
import lunartunesActive from '../../images/planets/lunartunes--active.gif';

storiesOf('Buttons', module)
    .addDecorator(centered)
    .add('Buttons.Planets', _ => (
        <IconButton ifActive={lunartunesActive} ifNotActive={lunartunes} />
    ));
