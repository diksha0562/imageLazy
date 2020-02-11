import React, {useRef, useEffect} from 'react';

const ImageComponent = ({imageUrl, src}) => {
    const imageElement = useRef(null);

    useEffect(()=>{
        const imageCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    observer.unobserve(lazyImage);
                }
            });
        }
        let observer = new IntersectionObserver(imageCallback);
        observer.observe(imageElement.current);

    },[])
    return (
        <div>
            <img src={src} data-src={imageUrl} style={{height: '512px', width: '512px'}} ref={imageElement}alt="images dummy"/>
            <noscript><img src={imageUrl}/></noscript>
        </div>

    )
}

export default ImageComponent;