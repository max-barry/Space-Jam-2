import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled('nav')(({ size }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gridTemplateRows: 'repeat(4, auto)',
    gridGap: 0,
    alignItems: 'center',
    justifyItems: 'center'
}));

const Item = styled('div')(({ wiggle: [x, y] }) => ({
    transform: `translate(${x}px, ${y}px)`
}));

const CenterItem = styled('div')({
    gridRow: '2 / span 2',
    gridColumn: '2 / span 2',
    width: '100%'
});

const RadialMenu = ({ items, wiggleMap, children, ...props }) => (
    <Container {...props}>
        {items.map((item, i) => (
            <Item key={`radial_menu_${i}`} wiggle={wiggleMap[i]}>
                {item}
            </Item>
        ))}
        <CenterItem>{children}</CenterItem>
    </Container>
);

RadialMenu.defaultProps = {};
RadialMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    ).isRequired,
    wiggleMap: PropTypes.object
};

export default RadialMenu;
