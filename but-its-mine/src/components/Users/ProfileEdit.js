import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './User.css';

class ProfileEdit extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            username: ''
        }
    }

    handleChange = (e) => {
        const {name , value} = e.target

        this.setState({
            [name]:value
        })
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
                <h2>Edit Your Profile</h2>
                <Link to='/profile'><button>Back to Profile Page</button></Link>
                <Link to='/forum'><button>Back to the Forum</button></Link>
                <form onSubmit={(e)=> this.props.handleProfileEdit(e, this.state)}>
                    <p>Your profile</p>
                    <div className='userInputContainer'>
                        <p>Name:</p>
                        <input
                            type = 'text'
                            name='name'
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='userInputContainer'>
                        <p>Username:</p>
                        <input
                            type = 'text'
                            name='username'
                            required
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type ='submit' value='Save Changes'/>
                </form>
            </div>
        )
    }
}

export default ProfileEdit;