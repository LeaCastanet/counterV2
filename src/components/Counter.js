const Counter = ({ count, setCount, index }) => {
  return (
    <div className="counterBodyEtReset">
      <div className="counterBody">
        {count !== 0 && (
          <button
            className="buttonMoins"
            onClick={() => {
              const newTab = [...count];
              newTab[index] = newTab[index] - 1;
              setCount(newTab);
            }}
          >
            -
          </button>
        )}

        <div className="counter">{count[index]}</div>
        {count !== 10 && (
          <button
            className="buttonPlus"
            onClick={() => {
              const newTab = [...count];
              newTab[index] = newTab[index] + 1;
              setCount(newTab);
            }}
          >
            +
          </button>
        )}
      </div>
      <button
        onClick={() => {
          const newTab = [...count];
          newTab[index] = 0;
          setCount(newTab);
        }}
        className="reset"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
