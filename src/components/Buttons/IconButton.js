import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';
import { colors } from '../../settings';

const Container = styled('a')({
    maxWidth: 96,
    transition: 'backgroundColor 80ms',
    display: 'block',
    fontSize: 12,
    textAlign: 'center',
    cursor: 'pointer',
    '&:focus, &:active, &:hover': {
        outline: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
});

const Icon = styled('img')({
    pointerEvents: 'none',
    marginRight: 'auto',
    marginLeft: 'auto'
});

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
    label,
    makeActive,
    makeNotActive,
    ...props
}) => (
    <Container
        tabIndex={1}
        onMouseOver={makeActive}
        onMouseOut={makeNotActive}
        onFocus={makeActive}
        onBlur={makeNotActive}
        {...props}
    >
        <Text>{label}</Text>
        <Icon src={active ? ifActive : ifNotActive} />
    </Container>
);

const enhance = withStateHandlers(({ active = false }) => ({ active }), {
    makeActive: _ => _ => ({
        active: true
    }),
    makeNotActive: _ => _ => ({
        active: false
    })
});

IconButtons.defaultProps = {};

IconButtons.propTypes = {
    label: PropTypes.string.isRequired,
    ifActive: PropTypes.string.isRequired,
    ifNotActive: PropTypes.string.isRequired
};

export default enhance(IconButtons);
