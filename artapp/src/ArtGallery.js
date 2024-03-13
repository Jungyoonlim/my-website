import React from 'react';
import './ArtGallery.css'; 

const ArtGallery = () => {
    const images = [
        // add images
    ];

    return (
        <div className="art-gallery">
            {images.map((image,index) => (
                <img key={index} src={image.src} alt={image.alt} className="art-image" />
            ))}
        </div>
    );
};

export default ArtGallery; 

