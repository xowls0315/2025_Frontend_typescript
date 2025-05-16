import { travelData } from "../../data/travel.data";
import Card from "./Card";

type ProductProps = { nation: string };

const Product = ({ nation }: ProductProps) => {
  return (
    <div className="flex gap-5">
      {travelData
        .filter((v) => v.imageSrc.includes(nation))
        .map((v, i) => (
          <Card key={i} {...v} />
        ))}
    </div>
  );
};

export default Product;
