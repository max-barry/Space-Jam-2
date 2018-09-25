import React from 'react';
import styled from 'react-emotion';
import { withStateHandlers } from 'recompose';
import { colors } from '../../settings';

const Button = styled('button')({
    maxWidth: 96,
    transition: 'backgroundColor 80ms',
    '&:focus, &:active, &:hover': {
        outline: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
});

const Icon = styled('img')({ pointerEvents: 'none' });

const Text = styled('span')(
    {
        color: colors.secondary,
        textTransform: 'uppercase',
        pointerEvents: 'none'
    },
    `
    -moz-text-stroke-color: black;
    -webkit-text-stroke-color: black;
    -moz-text-stroke-width: 1px;  
    -webkit-text-stroke-width: 1px;
`
);

const IconButtons = ({
    ifActive,
    ifNotActive,
    active,
    makeActive,
    makeNotActive,
    ...props
}) => (
    <Button
        {...props}
        onMouseOver={makeActive}
        onMouseOut={makeNotActive}
        onFocus={makeActive}
        onBlur={makeNotActive}
    >
        <Text>Lunar Tunes</Text>
        <Icon src={active ? ifActive : ifNotActive} />
    </Button>
);

const enhance = withStateHandlers(({ active = false }) => ({ active }), {
    makeActive: _ => _ => ({
        active: true
    }),
    makeNotActive: _ => _ => ({
        active: false
    })
});

export default enhance(IconButtons);
