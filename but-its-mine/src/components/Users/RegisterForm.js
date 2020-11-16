import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class RegisterForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
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
                <form onSubmit={(e)=> this.props.handleRegister(e, this.state)}>
                    <h2>Register to join the conversation</h2>
                    <div className='userInputContainer'>
                        <p>Name:</p>
                        <input
                            type = 'text'
                            name='name'
                            value={this.state.name}
                            required
                            placeholder='Name'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='userInputContainer'>
                        <p>Username:</p>
                        <input
                            type = 'text'
                            name='username'
                            placeholder='Username'
                            required
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='userInputContainer'>
                        <p>Password:</p>
                        <input
                            type = 'password'
                            name='password'
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type ='submit' value='Register'/>
                    <Link to='/login'><button>Login</button></Link>
                </form>
            </div>
        )
    }
}

export default RegisterForm;