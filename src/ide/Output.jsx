
const Output = () => {
  return (
    <div
      className="wholeTheme"
      style={{
        border: "solid black 4px",
        display: "grid",
        gridTemplateRows: "1fr 3fr",
      }}
    >
      <div
        style={{ height: "auto", textAlign: "center" }}
        className="solidLine"
      >
        채점결과
      </div>
      <div
        style={{ alignItems: "top", textAlign: "left" }}
        className="solidLine"
      >
        채점결과가 여기표시됩니다{" "}
      </div>
    </div>
  );
};

export default Output;
