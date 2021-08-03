import { products as DBProducts } from "../data/products";

const getSearchData = (data, searchItem) => {
  return data.filter((product) => {
    //console.log(searchItem);
    let searchMatch = true;
    if (searchItem && product.title.toLowerCase())
      searchMatch = product.title
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    return searchMatch;
  });
};

// const getSearchData = (data, searchString) => {
//   const fuse = new Fuse(data, {
//     threshold: 0.6,
//     minMatchCharLength: 2,
//     keys: ["title", "category", "description"],
//   });
//   return fuse.search(searchString);
// };

const getFilterData = (
  data,
  selectedCategories,
  selectedRating,
  selectedBrand,
  selectedPriceRange
) => {
  return data.filter((product) => {
    // console.log("hello" + data);
    // category filter
    let categoryMatch = true;
    if (selectedCategories.length && product.category)
      categoryMatch = selectedCategories.includes(product.category);

    // rating filter
    let ratingMatch = true;
    if (selectedRating && product.rating)
      ratingMatch = Number(product.rating) >= Number(selectedRating);

    // brand filter
    let brandMatch = true;
    if (selectedBrand && product.brand)
      brandMatch = product.brand
        .toLowerCase()
        .includes(selectedBrand.toLowerCase());

    // price filter
    let priceMatch = true;
    const { min, max, isApplied } = selectedPriceRange;
    if (isApplied && product.price)
      priceMatch = product.price >= min && product.price <= max;

    return categoryMatch && ratingMatch && brandMatch && priceMatch;
  });
};

const getMenuData = (data, selectedMenu) => {
  return data.filter((product) => {
    // console.log("hello" + data);
    // category filter
    let menuMatch = true;
    if (selectedMenu && product.category)
      menuMatch = selectedMenu === product.category;

    return menuMatch;
  });
};

const getPageData = (data, indexFrom, limit) => {
  return data.slice(indexFrom, indexFrom + limit);
};

const getSortData = (data, sortBy) => {
  return data.sort((product1, product2) => {
    if (sortBy === "PriceHighToLow") {
      return product1.price > product2.price ? -1 : 1;
    } else if (sortBy === "PriceLowToHigh") {
      return product1.price < product2.price ? -1 : 1;
    } else if (sortBy === "RatingLowToHigh") {
      return product1.rating < product2.rating ? -1 : 1;
    } else {
      // default 'RatingHighToLow'
      return product1.rating > product2.rating ? -1 : 1;
    }
  });
};

export const getVisibleProducts = ({
  selectedCategories,
  searchItem,
  selectedRating,
  indexFrom,
  limit,
  sortBy,
  selectedBrand,
  selectedMenu,
  selectedPriceRange,
}) => {
  let products = DBProducts;

  if (searchItem) products = getSearchData(products, searchItem);

  if (
    selectedCategories.length ||
    selectedRating ||
    selectedBrand ||
    selectedPriceRange.isApplied
  )
    products = getFilterData(
      products,
      selectedCategories,
      selectedRating,
      selectedBrand,
      selectedPriceRange
    );

  if (selectedMenu) products = getMenuData(products, selectedMenu);

  const total = products.length;

  //sort data call
  products = getSortData(products, sortBy);

  if (indexFrom && limit) products = getPageData(products, indexFrom, limit);
  const hasMoreData = total > indexFrom + limit;

  return { products, hasMoreData, total };
};

// import { products } from "../data/products";

// export const getVisibleProducts = (
//   selectedCategory,
//   selectedRating,
//   selectedPriceRange,
//   selectedBrand,
//   selectedSearchItem
// ) => {
//   // if (!selectedCategory.length) {
//   //   return products;
//   // }

//   return products.filter((product) => {
//     //search filter
//     // console.log(selectedSearchItem);
//     //console.log("abc", searchItem);

//     let searchMatch = true;
//     if (selectedSearchItem && product.title.toLowerCase())
//       searchMatch = product.title
//         .toLowerCase()
//         .includes(selectedSearchItem.toLowerCase());

//     // category filter
//     let categoryMatch = true;
//     if (selectedCategory.length && product.category)
//       categoryMatch = selectedCategory.includes(product.category);

//     // brand filter
//     let brandMatch = true;
//     if (selectedBrand.length && product.brand)
//       brandMatch = selectedBrand.includes(product.brand);

//     // price filter
//     let priceMatch = true;
//     const { min, max, isApplied } = selectedPriceRange;
//     if (isApplied && product.price)
//       priceMatch = product.price >= min && product.price <= max;

//     // //menu filter
//     // let menuMatch = true;
//     // if (selectedMenu && product.category)
//     //   menuMatch = selectedMenu === product.category;

//     // rating filter
//     let ratingMatch = true;
//     if (selectedRating && product.rating)
//       ratingMatch = Number(product.rating) >= Number(selectedRating);

//     return (
//       searchMatch && categoryMatch && priceMatch && ratingMatch && brandMatch
//     );
//   });
// };

// export const getVisibleProductsByMenu = (selectedMenu) => {
//   return products.filter((product) => {
//     //console.log(selectedMenu);
//     //menu filter
//     let menuMatch = true;
//     if (selectedMenu && product.category)
//       menuMatch = selectedMenu === product.category;

//     return menuMatch;
//   });
// };

// // export const getVisibleProducts = (selectedCategory) => {
// //   if (!selectedCategory.length) {
// //     return products;
// //   }
// //   const prods = products.filter((product) =>
// //     selectedCategory.includes(product.category)
// //   );
// //   return prods;
// // };
