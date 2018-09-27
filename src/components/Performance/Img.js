import React from 'react';
import PropTypes from 'prop-types';
import lazySizes from 'lazysizes';
import styled from 'react-emotion';

if (!window.lazySizesConfig && !window.lazySizesConfig.init) {
    lazySizes.cfg = { ...lazySizes.cfg, ...{} };
    lazySizes.init();
}

const Figure = styled('figure')(({ x, y }) => ({
    position: 'relative',
    height: 0,
    width: '100%',
    paddingBottom: `${(y / x) * 100}%`,
    'img, iframe, video': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block'
    }
}));

const ImgElement = styled('img')({
    transition: 'opacity 80ms',
    '&:not(.lazyloaded)': {
        opacity: 0
    }
});

const Img = ({ src, alt, x, y, ...props }) => (
    <div style={{ position: 'relative' }}>
        <Figure role="presentation" x={x} y={y} {...props}>
            <ImgElement alt={alt} data-src={src} className="lazyload" />
        </Figure>
    </div>
);

Img.defaultProps = {
    x: 16,
    y: 9
};

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    x: PropTypes.number,
    y: PropTypes.number
};

export default Img;
