import Button from "./Button";
import Button2 from "./Button2";
import Text from "./Text";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button2 backgroundColor={"primary"} borderRadius={"hard"} />
        <Button2 backgroundColor={"primary"} borderRadius={"smooth"} />
        <Button2 backgroundColor={"primary"} borderRadius={"circle"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button2 backgroundColor={"secondary"} borderRadius={"hard"} />
        <Button2 backgroundColor={"secondary"} borderRadius={"smooth"} />
        <Button2 backgroundColor={"secondary"} borderRadius={"circle"} />
      </div>
    </>
  );
}

export default App;
