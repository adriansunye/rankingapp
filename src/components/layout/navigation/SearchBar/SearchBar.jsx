function SearchBar({handleChange}) {
    return (
            <div className="fixed-top container">
                <input
                    className="form-control"
                    placeholder='Search...'
                    onChange={event => handleChange(event)}>
                </input>
            </div>
    );
};

export default SearchBar;