import React from 'react';

function FeaturedGame() {
    return (
        <div className='featured'>
            <h2>This week's featured game</h2>
            <h3>Cyberpunk 2077</h3>
            <img src='https://images.immediate.co.uk/production/volatile/sites/3/2020/09/cyberpunk-2077-poster-414748b.jpg?quality=90&resize=620%2C413' alt='cyberpunk poster' />
            <p>Cyberpunk 2077 has been delayed a couple times but they promise it won't be delayed again! Go check it out!</p>
            <a href='https://www.cyberpunk.net/us/en/' target="_blank" rel="noreferrer">Cyberpunk 2077 - By CD PROJEKT RED</a>
        </div>
    )
}

export default FeaturedGame;