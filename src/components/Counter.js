const Counter = ({ count, setCount }) => {
  return (
    <>
      <div className="counterBody">
        {count !== 0 && (
          <button className="buttonMoins" onClick={() => setCount(count - 1)}>
            -
          </button>
        )}

        <div className="counter">{count}</div>
        {count !== 10 && (
          <button className="buttonPlus" onClick={() => setCount(count + 1)}>
            +
          </button>
        )}
      </div>
      <button onClick={() => setCount(0)} className="reset">
        Reset
      </button>
    </>
  );
};

export default Counter;
