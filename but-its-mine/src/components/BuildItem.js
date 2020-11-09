import React from 'react';

function BuildItem(props) {
    return (
        <div>
            <iframe 
                width="508" 
                height="284" 
                src={props.src}
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowfullscreen
            >
            </iframe>
        </div>
    )
}

export default BuildItem;