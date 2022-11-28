const rating = ({ className, children }) => {
    return (
      <>
        <div className={className}>
          <div className={className}>
            <div className={className}>
              <input type="radio" name="rating" id="rating-5" />
              <label for="rating-5"></label>
              <input type="radio" name="rating" id="rating-4" />
              <label for="rating-4"></label>
              <input type="radio" name="rating" id="rating-3" />
              <label for="rating-3"></label>
              <input type="radio" name="rating" id="rating-2" />
              <label for="rating-2"></label>
              <input type="radio" name="rating" id="rating-1" />
              <label for="rating-1"></label>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default rating