import React from 'react';
import ImageItem from "./ImageItem";

const ImageList = ({images, largeImgHandler}) => {
    return (
        <ul className="ImageGallery">
            {images?.map((image) => (
                    <ImageItem image={image} key={image.id} largeImgHandler={largeImgHandler}/>
                )
            )}
        </ul>
    );
};

export default ImageList;
