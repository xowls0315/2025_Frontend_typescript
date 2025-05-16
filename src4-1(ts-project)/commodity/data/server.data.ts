import { Nation } from "../subcomponents/NationSelect";
import { TypeOptions } from "../subcomponents/TypeSelect";

export const serverData: { nation: Nation; type: TypeOptions }[] = [
  { nation: "japan", type: ["package", "free"] },
  { nation: "southeastAsia", type: ["package", "free"] },
  { nation: "taiwanHongKong", type: ["package", "free"] },
  { nation: "china", type: ["package"] },
  { nation: "oceania", type: ["package"] },
  { nation: "europe", type: ["package"] },
];
