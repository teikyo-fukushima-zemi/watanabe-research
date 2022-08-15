export const RadioButtons = () => {
  return (
    <div className="mx-3">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-1-${i}`}
                className="form-radio mr-2 mb-2"
              />
            ))}
          </label>

          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-2-${i}`}
                className="form-radio mr-2 mb-2"
              />
            ))}
          </label>

          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-3-${i}`}
                className="form-radio mr-2 mb-2"
              />
            ))}
          </label>

          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-4-${i}`}
                className="form-radio mr-2"
              />
            ))}
          </label>
        </div>
      </div>
    </div>
  );
};


