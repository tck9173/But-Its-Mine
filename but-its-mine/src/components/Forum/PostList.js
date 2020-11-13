import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm';
let renderNum = 1;
class PostList extends Component {
    constructor(props){
        super(props);

        this.state = {
            sortedPosts : "",
            search:'',
            searchTopic: 'title'
        }
    }

    sortLists= () => {
        const sortedPosts = this.props.posts.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
        this.setState({sortedPosts})  
    } 

    componentDidMount() {
        this.sortLists();
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value});
    }

    render() {
        console.log(this.props)
        console.log(renderNum)
        renderNum++
        return (
            <div>
                <Link to='/forum/posts/new'><button>Add a new post</button></Link>
                <SearchForm handleChange = {this.handleChange}/>
                {this.state.sortedPosts && this.state.sortedPosts.map((post, index) => {
                    return(
                        <div key={index}>
                            {this.state.search ?
                                <div>
                                    {post[this.state.searchTopic].toLowerCase().includes(this.state.search.toLowerCase()) ?
                                        <Link to={`/forum/posts/${post.id}`} >
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
                                    :
                                    null
                                    }
                                </div>
                            :
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
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostList;