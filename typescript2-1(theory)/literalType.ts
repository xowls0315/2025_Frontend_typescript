// 리터럴 타입
type Color = "black" | "pink" | "yellow";
const makeColor = (color: Color) => `${color}색은 이쁘다!`;
makeColor("pink");
// makeColor("blue"); 에러
type Coffee1 = "아메리카노" | "라떼" | "모카" | "민트초코";

// 템플릿 리터럴 타입
type Greeting = `Hello ${"kim" | "lee" | "park"}`;
const a5: Greeting = "Hello kim";

type Language = "ko" | "en" | "jp";
type Message = `message_${Language}`;
const b4: Message = "message_en";
