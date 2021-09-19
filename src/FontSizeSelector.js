import react from "react";

const FontSizeSelector = ({ font, setFont }) => {
  const opt = (i) => {
    return <option value={i}>{i}</option>;
  };
  let a = new Array(20);
  for (let i = 0; i < 20; i++) {
    a[i] = i + 10;
  }

  console.log(a);
  return (
    <div>
      <select value={font} onChange={setFont}>
        {a.map(opt, a)}
      </select>
    </div>
  );
};

export default FontSizeSelector;
