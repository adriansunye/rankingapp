const rating = ({ className , NameNew = "rating" } ) => {
    return (
            <div className={className}>
              <input type="radio" name={NameNew} id={NameNew + "-5"} />
              <label  for={NameNew + "-5"}></label>
              <input type="radio"  name={NameNew} id={NameNew + "-4"} />
              <label className="me-2" for={NameNew + "-4"}></label>
              <input type="radio" name={NameNew} id={NameNew + "-3"} />
              <label className="me-2" for={NameNew + "-3"}></label>
              <input type="radio" name={NameNew} id={NameNew + "-2"} />
              <label className="me-2"for={NameNew + "-2"}></label>
              <input type="radio" name={NameNew} id={NameNew + "-1"} />
              <label className="me-2" for={NameNew + "-1"}></label>
            </div>
    );
  };

  export default rating