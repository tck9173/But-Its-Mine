import React from 'react';

function FeaturedNews() {
    return (
        <div className='featured'>
            <h2>This week's featured news</h2>
            <h3>Latest post by Gamers Nexus</h3>
            <iframe width="874" height="500" src="https://www.youtube.com/embed/JDN8rLjWrTQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Gamers Nexus always has great reviews and great videos. If you have not done so already go check them out!</p>
        </div>
    )
}

export default FeaturedNews;