import { category } from "./category";

export const products = [
  {
    id: 1,
    image: "/images/products/01.png",
    title: "Baby Spanish",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 195,
    category: "BreakFast",
    brand: "ABC",
    units: 1,
    rating: 1,
  },
  {
    id: 2,
    image: "/images/products/02.png",
    title: "Grapes",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 270,
    category: "Fresh Friuts",
    brand: "ABC",
    units: "4",
    rating: 1,
  },

  {
    id: 3,
    image: "/images/products/03.png",
    title: "Kiwi",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 270,
    category: "Fresh Friuts",
    brand: "ABC",
    units: "8",
    rating: 1,
  },
  {
    id: 4,
    image: "/images/products/04.png",
    title: "Tamatoes",
    description: "Aromatice arabian rice with crispy chicken fillet",
    price: 270,
    category: "Fresh Friuts",
    brand: "ABC",
    units: "6",
    rating: 1,
  },
  {
    id: 5,
    image: "/images/products/05.png",
    title: "Corns",
    description: "One piece of hot crispy chicken",
    price: 290,
    category: "Fresh Vegitables",
    brand: "LU",
    units: "8",
    rating: 2,
  },

  {
    id: 6,
    image: "/images/products/06.png",
    title: "Turnips",
    description: "Krunch burger with regular fries and regular drink",
    price: 365,
    category: "Fresh Vegitables",
    brand: "LU",
    units: "6",
    rating: 2,
  },
  {
    id: 7,
    image: "/images/products/07.png",
    title: "Carrots",
    description: "2 piece of hot and crispy chicken with fries",
    price: 395,
    category: "Fresh Vegitables",
    brand: "UniLiver",
    units: "8",
    rating: 2,
  },
  {
    id: 8,
    image: "/images/products/08.png",
    title: "Apples",
    description: "3 pieces of hot and crispy chicken",
    price: 425,
    category: "Fresh Vegitables",
    brand: "ABC",
    units: "6",
    rating: 2,
  },
];

const findPriceRange = () => {
  let min = products[0].price;
  let max = 0;
  products.forEach((p) => {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
  });
  return { min, max };
};

// get price range in an array i.e., [min, max]
export const priceRange = findPriceRange();

export const getProductById = (id) => {
  return products.find((product) => product.id === Number(id));
};

let categoryTitles = category.map((category) => category.title);

export const relatedProducts = () => {
  return products.filter((item) => item.category === categoryTitles.title);
};
// function avgRating(p) {
//   let sum = p.reviews.reduce((sum, review) => sum + review.rating, 0);
//   return sum / p.reviews.length;
// }

// products.forEach((p, i) =>
//   console.log(`product#${i + 1} has ${avgRating(p)} avgreviwes`)
// );

// export const avgaRating = avgRating(products);
