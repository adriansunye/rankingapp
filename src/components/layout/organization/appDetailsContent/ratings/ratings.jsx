const rating = ({ className, NameNew = "rating" }) => {
  return (
    <div className={className}>
      <input type="radio" name={NameNew} id={NameNew + "-5"} value="5" />
      <label htmlFor={NameNew + "-5"}></label>
      <input type="radio" name={NameNew} id={NameNew + "-4"} value="4" />
      <label className="me-2" htmlFor={NameNew + "-4"}></label>
      <input type="radio" name={NameNew} id={NameNew + "-3"} value="3" />
      <label className="me-2" htmlFor={NameNew + "-3"}></label>
      <input type="radio" name={NameNew} id={NameNew + "-2"} value="2" />
      <label className="me-2" htmlFor={NameNew + "-2"}></label>
      <input type="radio" name={NameNew} id={NameNew + "-1"} value="1" />
      <label className="me-2" htmlFor={NameNew + "-1"}></label>
    </div>
  );
};

export default rating;
