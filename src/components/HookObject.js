import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  return (
    <form>
      <label>
        firstName
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={changeHandler}
        />
      </label>
      <label>
        LastName
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={changeHandler}
        />
      </label>
      <div>{JSON.stringify(user)}</div>
    </form>
  );
};

export default HookObject;
