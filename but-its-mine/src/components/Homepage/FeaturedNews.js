import React from 'react';

function FeaturedNews() {
    return (
        <div className='featured'>
            <h2>This week's featured news</h2>
            <h3>Latest post by Gamers Nexus</h3>
            <iframe title='Featured News' src="https://www.youtube.com/embed/JDN8rLjWrTQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Gamers Nexus always has great reviews and great videos. If you have not done so already go check them out!</p>
            <a href='https://www.youtube.com/user/GamersNexus' target="_blank" rel="noreferrer">Gamers Nexus on YouTube</a>
        </div>
    )
}

export default FeaturedNews;