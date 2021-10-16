import "../css/wholeTheme.css";

const Problem = (props) => {
  const { className } = props;
  // const style={
  //     display:'grid',
  //     gridTemplateRows:'1fr 1fr',
  //     border: '2px solid green'
  // }

  return (
    <div className={"Problem " + className}>
      <div>문제</div>
      {/*<Question /> */}
      {/* <testCase />  */}
      <div>테스트케이스</div>
    </div>
  );
};

export default Problem;
