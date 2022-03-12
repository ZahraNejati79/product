import { useContext } from "react";
import { WebContext } from "../../App";
const NavBar = ({ count }) => {
  const name = useContext(WebContext);
  return (
    <>
      {name}
      <header>Count :{count}</header>
    </>
  );
};

export default NavBar;
