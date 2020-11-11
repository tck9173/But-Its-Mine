import React, {Component} from 'react';

class CreateCommentForm extends Component {
    constructor(props) {
        super(props);

        this.state ={
            body: '',
            userId: props.userId,
            postId: props.currentPost
        }
    }

    handleChange = (e) => {
        const {name, value} =e.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <form onSubmit={(e) => this.props.createComment(e, this.state)}>
                <input
                    type='textarea'
                    name='body'
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <input type='submit' value='Comment!' />
            </form>
        )
    }
}

export default CreateCommentForm;