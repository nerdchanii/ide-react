import Login from "./Login";

const HeaderBar = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
      <h1 style={{ margin: 0, display: "inline-block" }}>CodeSparring</h1>
      <Login />
    </div>
  );
};

export default HeaderBar;
