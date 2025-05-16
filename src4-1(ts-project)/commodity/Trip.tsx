type TripProps = {
  area: Area;
  kind: Kind;
};

type Area =
  | "일본"
  | "동남아"
  | "대만/홍콩"
  | "중국"
  | "대양주"
  | "유럽"
  | "미주/캐나다"
  | "부산/대구";

type Kind = "패키지" | "자유";

const Trip = ({ area, kind }: TripProps) => {
  return (
    <div>
      <h2>{`나는 ${area}에서 ${kind} 여행을 즐기고 싶어요. 캬캬캬`}</h2>
    </div>
  );
};

export default Trip;
