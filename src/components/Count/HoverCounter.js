import WithCounter from "../hoc/withCounter";

const HoverCounter = ({ count, increment }) => {
  return (
    <div>
      <button onMouseOver={increment}> hover :{count} time</button>
    </div>
  );
};

export default WithCounter(HoverCounter);
