import React from 'react';
import { Link } from 'react-router-dom';

const ForumHome = () => {
    return (
        <div>
            <h2>Welcome to the "But it's mine" forum!</h2>
            <h3>Here are a couple rules...</h3>
            <p>Be nice. We are all here to have fun.</p>
            <p>This is a general forum. Use it to post your own builds, builds you plan to complete, to ask questions, or to start general discussion.</p>
            <p>Please note, due to budget cuts there are no forum moderators. Don't make corporate regret that decision.</p>
            <h3>If you are ready.... click below....</h3>
            <Link to='/forum/posts'><button>Continue...</button></Link>
        </div>
    )
}

export default ForumHome;