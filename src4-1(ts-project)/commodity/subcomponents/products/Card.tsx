import Image from "next/image";

export type CardProps = { imageSrc: string; name: string };

const Card = ({ imageSrc, name }: CardProps) => {
  console.log({ imageSrc, name });
  return (
    <div className="flex flex-col">
      <div className="relative w-[200px] h-[200px] rounded-xl">
        <Image fill src={imageSrc} alt={""} />
      </div>
      <div className="text-2xl">{name}</div>
    </div>
  );
};

export default Card;
