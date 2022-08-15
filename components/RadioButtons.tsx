interface RadioButtonsProps {
  // 上から何面目か
  index: number;
}

export const RadioButtons = ({ index }: RadioButtonsProps) => {
  return (
    <div className="mx-3">
      <div className="flex flex-col items-center">
        <h3 className="text-center mb-2">
          {index + 1}面目
        </h3>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-${index}-1-${i}`}
                className="form-radio mr-2 mb-2"
              />
            ))}
          </label>

          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-${index}-2-${i}`}
                className="form-radio mr-2 mb-2"
              />
            ))}
          </label>

          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-${index}-3-${i}`}
                className="form-radio mr-2 mb-2"
              />
            ))}
          </label>

          <label className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <input
                type="radio"
                name={`radio-${index}-4-${i}`}
                className="form-radio mr-2"
              />
            ))}
          </label>
        </div>
      </div>
    </div>
  );
};
