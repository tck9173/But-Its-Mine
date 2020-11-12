import React from 'react';
import {Link} from 'react-router-dom';

const PostList = (props) => {
    return (
        <div>
            <Link to='/forum/posts/new'><button>Add a new post</button></Link>
            {props.posts && props.posts.map((post, index) => {
                return (
                    <Link to={`/forum/posts/${post.id}`} key={index}>
                        <div className='postListItem'>
                            <div className='postListImgContainer' >
                                <img className="postListImg" src={post.img} alt={post.title}/>      
                            </div>
                            <div>
                                <h3>{post.title}</h3> 
                                <p>Likes: {post.likes}</p>    
                            </div>
                            
                        </div>
                        
                    </Link>
                )
            })}
        </div>
    )
}

export default PostList;