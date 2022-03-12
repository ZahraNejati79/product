import WithCounter from "../hoc/withCounter";

const ClickCounter = ({ count, increment }) => {
  return (
    <div>
      <button onClick={increment}> click :{count} time</button>
    </div>
  );
};

export default WithCounter(ClickCounter);
