import { useState } from "react";

const useToggleHook = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const setToggle = () => {
    setValue((prev) => !prev);
  };

  return [value, setToggle] as const;
};

export default useToggleHook;
