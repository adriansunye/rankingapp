function SearchBar({handleChange}) {
    return (
            <div className="fixed-top container mt-2">
                <input
                    className="form-control"
                    placeholder='Search...'
                    onChange={event => handleChange(event)}>
                </input>
            </div>
    );
};

export default SearchBar;