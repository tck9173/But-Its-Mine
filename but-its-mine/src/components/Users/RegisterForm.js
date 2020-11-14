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
                    <input
                        type = 'text'
                        name='name'
                        value={this.state.name}
                        placeholder='Name'
                        onChange={this.handleChange}
                    />
                    <input
                        type = 'text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type = 'password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type ='submit' value='Register'/>
                    <Link to='/login'>Login</Link>
                </form>
            </div>
        )
    }
}

export default RegisterForm;