import React, {Component} from 'react';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state ={
            title: '',
            body: '',
            userId: ''
        }
    }

    handleChange = (e) => {
        const {name, value} =e.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <form onSubmit={(e) => this.props.createPost(e, this.state)}>
                <input
                    type='text'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='userId'
                    value={this.state.userId}
                    onChange={this.handleChange}
                />
                <input
                    type='textarea'
                    name='body'
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <input type='submit' value='Post It!' />
            </form>
        )
    }
}

export default CreatePostForm;