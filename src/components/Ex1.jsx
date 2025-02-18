import Ex2 from "./Ex2";

const Ex1 = (props) => {
  return (
    <>
      <div>
        This is Example {props.exNum} {props.name}
      </div>
      <Ex2 exNum={props.exNum + 1} name={props.name} />
    </>
  );
};
export default Ex1;
