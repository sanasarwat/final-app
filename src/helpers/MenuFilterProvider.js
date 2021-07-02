import React, { useState } from "react";
import { createContext } from "react";

export const MenuFilterContext = createContext();

export default function MenuFilterProvider(props) {
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <MenuFilterContext.Provider
      value={{
        ...props,

        selectedMenu,
        setSelectedMenu,
      }}
    >
      {props.children}
    </MenuFilterContext.Provider>
  );
}
