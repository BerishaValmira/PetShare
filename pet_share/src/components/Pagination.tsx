const Pagination = () => {
  return (
    <div className="pagination pagination-rounded">
      <input type="radio" name="pagination-5" id="pgn-13" />
      <label htmlFor="pgn-13" className="btn">
        1
      </label>
      <input type="radio" name="pagination-5" id="pgn-14" />
      <label htmlFor="pgn-14" className="btn">
        2
      </label>
      <input type="radio" name="pagination-5" id="pgn-15" />
      <label htmlFor="pgn-15" className="btn">
        3
      </label>
    </div>
  );
};

export { Pagination };
