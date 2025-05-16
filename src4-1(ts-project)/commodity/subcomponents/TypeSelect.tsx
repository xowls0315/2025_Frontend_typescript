export type TypeOptions = ["package"] | ["package", "free"];
type TypeSelectProps = {
  type: TypeOptions;
};

const TypeSelect = ({ type }: TypeSelectProps) => {
  const obj = {
    package: "패키지",
    free: "자유",
  };

  return (
    <div className="relative inline-block w-52">
      <select
        className="
          block w-full
          appearance-none bg-white
          border border-gray-300 rounded-lg
          px-4 py-2 pr-8
          text-gray-800 text-sm
          focus:outline-none 
          cursor-pointer
        "
      >
        {type.map((v, i) => (
          <option key={i} value={v}>
            {obj[v]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelect;
