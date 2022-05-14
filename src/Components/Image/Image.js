import React from 'react';

import PropTypes from 'prop-types';

import { ImageContainer } from './Image-style';

const Image = ({img, alt, id, title}) => {
   return (
       <ImageContainer src={img} id={id || img} title={title} alt={alt} />
   )
};

Image.propTypes = {
    img: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string,
};

Image.defaultProps = {
    alt: 'image'
}

export default Image;