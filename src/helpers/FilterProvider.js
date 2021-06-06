import React, { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

export default function FilterProvider(props) {
  const [selectedSearchItem, setSelecetdSearchItem] = useState("");
  const [selectedCategory, setselectedCategory] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  const [selectedMenu, setSelectedMenu] = useState("");

  //search handler
  function searchHandler(e) {
    setSelecetdSearchItem(e.target.value);
  }

  //check handler
  const onChangeCheckedHandler = (category, isChecked) => {
    if (isChecked) {
      setselectedCategory([...selectedCategory, category]);
    } else
      setselectedCategory(selectedCategory.filter((cat) => cat !== category));
  };
  //check handler
  const onChangeBrandHandler = (brand, isChecked) => {
    if (isChecked) {
      setSelectedBrand([...selectedBrand, brand]);
    } else setSelectedBrand(selectedBrand.filter((bran) => bran !== brand));
  };

  return (
    <FilterContext.Provider
      value={{
        ...props,
        selectedSearchItem,
        setSelecetdSearchItem,
        selectedCategory,
        setselectedCategory,
        selectedBrand,
        setSelectedBrand,
        onChangeBrandHandler,
        selectedRating,
        setSelectedRating,
        searchHandler,
        onChangeCheckedHandler,
        selectedMenu,
        setSelectedMenu,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
