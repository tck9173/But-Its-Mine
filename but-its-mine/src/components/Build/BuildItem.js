import React from 'react';

//displays embeded youtube videos
function BuildItem(props) {
    return (
        <div>
            <iframe 
                width="508" 
                height="284" 
                src={props.src}
                frameBorder="0" 
                allow="accelerometer; 
                autoplay; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowFullScreen
                title={props.src}
            >
            </iframe>
        </div>
    )
}

export default BuildItem;