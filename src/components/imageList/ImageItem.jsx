import React from 'react';

const ImageItem = ({image, largeImgHandler}) => {
    return (
        <div>
            <li id={image.id} className="ImageGalleryItem">
                <img src={image.webformatURL}
                     alt={image.type}
                     onClick={largeImgHandler}
                     data-source={image.largeImageURL}
                     className="ImageGalleryItem-image"
                />
            </li>
        </div>
    );
};

export default ImageItem;
