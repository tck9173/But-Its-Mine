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
            <form onSubmit={(e)=> this.props.handleLogin(e, this.state)}>
                <input
                    type = 'text'
                    name='username'
                    required
                    maxlength='25'
                    value={this.state.username}
                    placeholder= 'Username'
                    onChange={this.handleChange}
                />
                <input
                    type = 'password'
                    name='password'
                    placeholder='Password'
                    maxlength='25'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type ='submit' value='Login'/>
                <Link to='/register'><button>Register</button></Link>
            </form>
        )
    }
}

export default LoginForm;