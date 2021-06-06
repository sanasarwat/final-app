import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as GiIcons from "react-icons/gi";

export const category = [
  {
    id: 1,
    title: "Fresh Vegitables",
    icon: <GiIcons.GiCarrot size="3rem" />,
  },
  {
    id: 2,
    title: "Fresh Friuts",
    icon: <GiIcons.GiKiwiFruit size="3rem" />,
  },
  {
    id: 3,
    title: "Dairy & Eggs",
    icon: <GiIcons.GiMilkCarton size="3rem" />,
  },
  {
    id: 4,
    title: "BreakFast",
    icon: <GiIcons.GiSlicedBread size="3rem" />,
  },
  {
    id: 5,
    title: "Frozen",
    icon: <CgIcons.CgIcecream size="3rem" />,
  },
  {
    id: 6,
    title: "Oragnic",
    icon: <GiIcons.GiCoffeeBeans size="3rem" />,
  },
  {
    id: 7,
    title: "Canned Food",
    icon: <GiIcons.GiCannedFish size="3rem" />,
  },
  {
    id: 8,
    title: "Coffee & Snaks",
    icon: <BiIcons.BiCoffeeTogo size="3rem" />,
  },
  {
    id: 9,
    title: "Bavrage & Juice",
    icon: <BiIcons.BiDrink size="3rem" />,
  },
  {
    id: 10,
    title: "Sauce & Jams",
    icon: <GiIcons.GiHoneyJar size="3rem" />,
  },
];

//get array of category titles ['Burger','Pizaa','Suwarma']

export const categoryTitles = category.map((category) => category.title);

export const getCatById = (id) => {
  return category.find((cat) => cat.id === Number(id));
};
