import React, { useContext, useState } from "react";
import { ProductListing } from "./ProductListing";
import { FilterBar } from "./FilterBar";
import { priceRange } from "../../data/products";

import { CategoryFilter } from "./CategoryFilter";
import { getVisibleProducts } from "../../api/products-api";
import { getVisibleProductsByMenu } from "../../api/products-api";
import { BrandFilter } from "./BrandFilter";
import { ChipFilter } from "./ChipFilter";
import { SearchBar } from "./SearchFilter";
import PriceFilter from "./PriceFilter";
import ReviewFilter from "./ReviewFilter";
import ItemFoundText from "./ItemFoundText";
import { FilterContext } from "../../helpers/FilterProvider";
import NavBar from "../../Components/Header/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core/";
//import TopHeader from "../../components/top-header/top-header";
import Footer from "../../Components/Footer/Footer";
import BreadCrums from "../../Components/Breadcrums/Breadcrums";
import BottomHeader from "../../Components/Header/BottomHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

export default function Collections(props) {
  const classes = useStyles();

  const {
    selectedBrand,
    selectedCategory,
    setselectedCategory,
    onChangeBrandHandler,
    onChangeCheckedHandler,
    selectedRating,
    setSelectedRating,
    selectedMenu,
    searchHandler,
    selectedSearchItem,
  } = useContext(FilterContext);

  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: priceRange.min,
    max: priceRange.max,
    isApplied: false,
  });

  const initPriceFilter = () => ({
    min: priceRange.min,
    max: priceRange.max,
    isApplied: false,
  });

  //price handler

  const onChangePriceHandler = (newPriceRange) => {
    if (newPriceRange === "clear")
      return setSelectedPriceRange(initPriceFilter());

    if (
      newPriceRange[0] === priceRange.min &&
      newPriceRange[1] === priceRange.max
    )
      return setSelectedPriceRange(initPriceFilter());

    setSelectedPriceRange({
      min: newPriceRange[0],
      max: newPriceRange[1],
      isApplied: true,
    });
  };

  //products get

  const products = !selectedMenu
    ? getVisibleProducts(
        selectedCategory,
        selectedRating,
        selectedPriceRange,
        selectedBrand,
        selectedSearchItem
      )
    : getVisibleProductsByMenu(selectedMenu);

  return (
    <>
      {/* <TopHeader /> */}
      <NavBar />
      <BreadCrums />
      <Container className={classes.root}>
        <Grid container>
          <Grid item md={3} lg={3} sm={12} xs={12} p={2}>
            <FilterBar
              selectedCategory={selectedCategory}
              setselectedCategory={setselectedCategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
            <SearchBar
              searchHandler={searchHandler}
              selectedSearchItem={selectedSearchItem}
              placeholder="Search Products"
            />

            <CategoryFilter
              selectedCategory={selectedCategory}
              onChangeCategory={onChangeCheckedHandler}
            />
            <BrandFilter
              selectedBrand={selectedBrand}
              onChangeBrand={onChangeBrandHandler}
            />

            <PriceFilter
              selectedPriceRange={selectedPriceRange}
              onChangePrice={onChangePriceHandler}
              min={priceRange.min}
              max={priceRange.max}
            />
            <ReviewFilter
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </Grid>

          <Grid item md={9} lg={9} sm={12} xs={12}>
            <Grid item>
              <Grid item md={12}>
                <ItemFoundText total={products.length} string="Search String" />
              </Grid>
            </Grid>

            <Grid item md={12}>
              <ChipFilter
                selectedCategory={selectedCategory}
                setselectedCategory={setselectedCategory}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
              />
            </Grid>
            <Grid item md={12}>
              <ProductListing products={products} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <BottomHeader />
      <Footer />
    </>
  );
}
