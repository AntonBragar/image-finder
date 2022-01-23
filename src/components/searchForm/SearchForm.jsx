import React, {Component} from 'react';

class SearchForm extends Component {

    state = {
        search: "",
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        onChange={this.handleChange}
                        className="SearchForm-input"
                        type="text"
                        // autoComplete="off"
                        // autoFocus
                        placeholder="Search images and photos"
                        name="search"
                    />
                </form>
            </header>
        );
    }
}

export default SearchForm;