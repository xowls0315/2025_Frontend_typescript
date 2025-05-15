import NationSelect from "./subcomponents/NationSelect";
import TypeSelect from "./subcomponents/TypeSelect";

const Commodity = () => {
  const dada = [{ nation: "일본", type: ["패키지", "자유"] }];

  return (
    <>
      <NationSelect />
      <TypeSelect />
    </>
  );
};

export default Commodity;
