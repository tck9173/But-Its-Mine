import React from 'react';
import ForumItem from './ForumItem';

const posts = [{
    postId: 1,
    userId: 1,
    title: "Post 1",
    postBody: "This is my first post here.",
    reactions: {
        likes: 0
    }
},
{
    postId: 2,
    userId: 1,
    title: "Post 2",
    postBody: "This is my second post here.",
    reactions: {
        likes: 0
    }
},
{
    postId: 3,
    userId: 1,
    title: "Post 3",
    postBody: "This is my third post here.",
    reactions: {
        likes: 0
    }
}]

function ForumContainer() {
    return (
        <div className='main'>
            <h2>Forum</h2>
            {posts.map((post, index) => {
                return (
                    <ForumItem post = {post} key={index}/>
                )
            })}
        </div>
    )
}

export default ForumContainer