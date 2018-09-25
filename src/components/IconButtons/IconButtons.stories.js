import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import IconButtons from './IconButtons';
import lunartunes from '../../images/planets/lunartunes.gif';
import lunartunesActive from '../../images/planets/lunartunes--active.gif';

storiesOf('IconButtons', module)
    .addDecorator(centered)
    .add('default', _ => (
        <IconButtons ifActive={lunartunesActive} ifNotActive={lunartunes} />
    ));
