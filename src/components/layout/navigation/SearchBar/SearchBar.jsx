function SearchBar({handleChange}) {
    return (
            <div className="container">
                <input
                    className="form-control"
                    placeholder='Search...'
                    onChange={event => handleChange(event)}>
                </input>
            </div>
    );
};

export default SearchBar;