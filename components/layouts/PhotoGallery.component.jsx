import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox'

const PhotoGallery = ({ photos = [] }) => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false)

    const imgSources = photos.map(photo => photo.src)

    return (
        <>
            <Gallery
                photos={photos}
                // targetRowHeight={300}
                onClick={(event, clickedImage) => {
                    setPhotoIndex(clickedImage.index)
                    setLightboxIsOpen(true)
                }} />
            {lightboxIsOpen &&
                <Lightbox
                    mainSrc={imgSources[photoIndex]}
                    nextSrc={imgSources[(photoIndex + 1) % imgSources.length]}
                    prevSrc={imgSources[(photoIndex - 1) % imgSources.length]}
                    animationOnKeyInput={true}
                    onCloseRequest={() => {
                        setPhotoIndex(0)
                        setLightboxIsOpen(false)
                    }
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + imgSources.length - 1) % imgSources.length)} />
            }
        </>
    )
}

export default PhotoGallery