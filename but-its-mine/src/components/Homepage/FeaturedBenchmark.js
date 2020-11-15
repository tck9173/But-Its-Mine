import React from 'react';

function FeaturedBenchmark() {
    return (
        <div className='featured'>
            <h2>This week's featured benchmark</h2>
            <h3>Heaven Benchmark from Unigine</h3>
            <iframe width="874" height="500" src="https://www.youtube.com/embed/uEXv8A0-_KU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This is a great benchmark for anyone building a system for the first time. Go check it out!</p>
            <a href='https://benchmark.unigine.com/heaven' target="_blank">Heaven Benchmark by Unigine</a>
        </div>
    )
}

export default FeaturedBenchmark;