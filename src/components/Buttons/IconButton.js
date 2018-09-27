import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';
import { colors } from '../../settings';

const StyledLink = styled(Link)({
    maxWidth: 115,
    transition: 'backgroundColor 80ms',
    display: 'block',
    fontSize: 12,
    textAlign: 'center',
    cursor: 'pointer',
    padding: 12,
    borderRadius: 3,
    textDecoration: 'none',
    '&:focus, &:active, &:hover': {
        outline: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        textDecoration: 'none'
    }
});

const Icon = styled('img')({
    pointerEvents: 'none',
    marginRight: 'auto',
    marginLeft: 'auto'
    // width: '100%'
});

const Text = styled('span')(
    {
        color: colors.secondary,
        textTransform: 'uppercase',
        pointerEvents: 'none',
        marginBottom: 3,
        display: 'block'
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
    to,
    ...props
}) => (
    <StyledLink
        tabIndex={1}
        onMouseOver={makeActive}
        onMouseOut={makeNotActive}
        onFocus={makeActive}
        onBlur={makeNotActive}
        to={to}
        {...props}
    >
        <Text>{label}</Text>
        <Icon src={active ? ifActive : ifNotActive} />
    </StyledLink>
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
    ifNotActive: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default enhance(IconButtons);
