import { products } from "../data/products";

export const getVisibleProducts = (
  selectedCategory,
  selectedRating,
  selectedPriceRange,
  selectedBrand,
  selectedSearchItem
) => {
  // if (!selectedCategory.length) {
  //   return products;
  // }

  return products.filter((product) => {
    //search filter
    // console.log(selectedSearchItem);
    //console.log("abc", searchItem);

    let searchMatch = true;
    if (selectedSearchItem && product.title.toLowerCase())
      searchMatch = product.title
        .toLowerCase()
        .includes(selectedSearchItem.toLowerCase());

    // category filter
    let categoryMatch = true;
    if (selectedCategory.length && product.category)
      categoryMatch = selectedCategory.includes(product.category);

    // brand filter
    let brandMatch = true;
    if (selectedBrand.length && product.brand)
      brandMatch = selectedBrand.includes(product.brand);

    // price filter
    let priceMatch = true;
    const { min, max, isApplied } = selectedPriceRange;
    if (isApplied && product.price)
      priceMatch = product.price >= min && product.price <= max;

    // //menu filter
    // let menuMatch = true;
    // if (selectedMenu && product.category)
    //   menuMatch = selectedMenu === product.category;

    // rating filter
    let ratingMatch = true;
    if (selectedRating && product.rating)
      ratingMatch = Number(product.rating) >= Number(selectedRating);

    return (
      searchMatch && categoryMatch && priceMatch && ratingMatch && brandMatch
    );
  });
};

export const getVisibleProductsByMenu = (selectedMenu) => {
  return products.filter((product) => {
    //console.log(selectedMenu);
    //menu filter
    let menuMatch = true;
    if (selectedMenu && product.category)
      menuMatch = selectedMenu === product.category;

    return menuMatch;
  });
};

// export const getVisibleProducts = (selectedCategory) => {
//   if (!selectedCategory.length) {
//     return products;
//   }
//   const prods = products.filter((product) =>
//     selectedCategory.includes(product.category)
//   );
//   return prods;
// };
