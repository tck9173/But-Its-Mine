import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './User.css';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            username: ''
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.currentUser.name,
            username: this.props.currentUser.username
        })
    }

    render() {
        return (
            <div className='main'>
                <h2>Your Profile</h2>
                <Link to='/forum'><button>Back to the Forum</button></Link>
                <form>
                    <p>Your profile</p>
                    <div className='userInputContainer'>
                        <p>Name:</p>
                        <input
                            type = 'text'
                            name='name'
                            value={this.state.name}
                        />
                    </div>
                    <div className='userInputContainer'>
                        <p>Username:</p>
                        <input
                            type = 'text'
                            name='username'
                            value={this.state.username}
                        />
                    </div>
                </form>
                <Link to='/profile/edit'><button>Edit Profile</button></Link>
            </div>
        )
    }
}

export default Profile;