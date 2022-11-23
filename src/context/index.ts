import { createContext } from "react";

export const Context = createContext({
  name: "",
  age: 0,
  setName: () => {},
  setAge: () => {},
} as any);
