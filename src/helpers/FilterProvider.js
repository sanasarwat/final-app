import React, { useState } from "react";
import { createContext } from "react";
import { UseQuery } from "../Hooks";

export const FilterContext = createContext();

export default function FilterProvider(props) {
  // const q = UseQuery();
  // const category = q.query.category;
  // let catparam = category ? category.split(",") : [];
  // const [selectedCategories, setSelectedCategories] = useState(
  //   catparam ? catparam : []
  // );
  // catparams ? catparams : []
  // [];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: "",
    max: "",
    isApplied: false,
  });

  // const [selectedMenu, setSelectedMenu] = useState("");

  // const [selectedSearchItem, setSelecetdSearchItem] = useState("");
  // const [selectedCategory, setselectedCategory] = useState([]);

  // const [selectedBrand, setSelectedBrand] = useState([]);
  // const [selectedRating, setSelectedRating] = useState("");

  // //search handler
  // function searchHandler(e) {
  //   setSelecetdSearchItem(e.target.value);
  // }

  // //check handler
  // const onChangeCheckedHandler = (category, isChecked) => {
  //   if (isChecked) {
  //     setselectedCategory([...selectedCategory, category]);
  //   } else
  //     setselectedCategory(selectedCategory.filter((cat) => cat !== category));
  // };
  // //check handler
  // const onChangeBrandHandler = (brand, isChecked) => {
  //   if (isChecked) {
  //     setSelectedBrand([...selectedBrand, brand]);
  //   } else setSelectedBrand(selectedBrand.filter((bran) => bran !== brand));
  // };

  return (
    <FilterContext.Provider
      value={{
        ...props,
        searchItem,
        setSearchItem,
        selectedCategories,
        setSelectedCategories,
        selectedBrand,
        setSelectedBrand,
        selectedRating,
        setSelectedRating,
        sortBy,
        setSortBy,
        selectedMenu,
        setSelectedMenu,
        selectedPriceRange,
        setSelectedPriceRange,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
