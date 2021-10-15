import react from "react";

const FontSizeSelector = ({ font, handleFont }) => {
  const opt = (i) => {
    return <option value={i}>{i}</option>;
  };
  let a = new Array(20);
  for (let i = 0; i < 20; i++) {
    a[i] = i + 10;
  }

  console.log(a);
  return (
    <select className="wholeTheme" value={font} onChange={handleFont}>
      {a.map(opt, a)}
    </select>
  );
};

export default FontSizeSelector;
