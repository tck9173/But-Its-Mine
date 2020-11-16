import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {name , value} = e.target

        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className='main'>
                <form onSubmit={(e)=> this.props.handleLogin(e, this.state)}>
                    <h2>Log in to join the conversation</h2>
                    <div className='userInputContainer'>
                        <p>Username:</p>
                        <input
                            type = 'text'
                            name='username'
                            required
                            maxLength='25'
                            value={this.state.username}
                            placeholder= 'Username'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='userInputContainer'>
                        <p>Password:</p>
                        <input
                            type = 'password'
                            name='password'
                            maxLength='25'
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type ='submit' value='Login'/>
                    <Link to='/register'><button>Register</button></Link>
                </form>
            </div>
        )
    }
}

export default LoginForm;