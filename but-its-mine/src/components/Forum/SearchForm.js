import React from 'react';

const SearchForm = (props) => {
    return(
        <form onChange = {(e)=> props.handleChange(e)}>
            <span>Search: </span>
            <input 
                type='text'
                name='search'
            />
            <span>Search in:</span>
            <select name='searchTopic'>
                <option value='title'>Post Title</option>
                <option value='body'>Post Body</option>
            </select>
        </form>
    )
}

export default SearchForm;