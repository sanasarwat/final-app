import React, { useContext, useState, useMemo } from "react";
import { ProductListing } from "./ProductListing";
import { FilterBar } from "./FilterBar";
import SortFilter from "./SortFilter";
import { CategoryFilter } from "./CategoryFilter";
import { getVisibleProducts } from "../../api/products-api";
import BrandFilter from "./BrandFilter";
import { ChipFilter } from "./ChipFilter";
import { SearchBar } from "./SearchFilter";
import PriceFilter from "./PriceFilter";
import ReviewFilter from "./ReviewFilter";
import ItemFoundText from "./ItemFoundText";
import { FilterContext } from "../../helpers/FilterProvider";

import NavBar from "../../Components/Header/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core/";
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

export default function Collections() {
  const classes = useStyles();
  //let query = UseQuery();
  //let cName = query.get("category") || "";

  const {
    selectedCategories,
    setSelectedCategories,
    searchItem,
    setSearchItem,
    selectedRating,
    setSelectedRating,
    sortBy,
    setSortBy,
    selectedBrand,
    setSelectedBrand,
    selectedMenu,
    setSelectedMenu,
    selectedPriceRange,
    setSelectedPriceRange,
  } = useContext(FilterContext);
  // console.log(selectedMenu);

  //products get

  const { products } = useMemo(
    () =>
      getVisibleProducts({
        selectedCategories,
        searchItem,
        selectedRating,
        sortBy,
        selectedBrand,
        selectedMenu,
        selectedPriceRange,
      }),
    [
      selectedCategories,
      searchItem,
      selectedRating,
      sortBy,
      selectedBrand,
      selectedMenu,
      selectedPriceRange,
    ]
  );

  return (
    <>
      {/* <TopHeader /> */}
      <NavBar />
      <BreadCrums />
      <Container className={classes.root}>
        <Grid container>
          <Grid item md={3} lg={3} sm={12} xs={12} p={2}>
            <FilterBar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              setSelectedMenu={setSelectedMenu}
              searchItem={searchItem}
              setSearchItem={setSearchItem}
            />
            <SearchBar
              setSearchItem={setSearchItem}
              placeholder="Search Products"
            />

            <CategoryFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <BrandFilter
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />

            <PriceFilter
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
            />
            <ReviewFilter
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </Grid>

          <Grid item md={9} lg={9} sm={12} xs={12}>
            <Grid container>
              <Grid item md={9}>
                <ItemFoundText total={products.length} string="Search String" />
              </Grid>
              <Grid item md={3}>
                <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={12}>
                <ChipFilter
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                  selectedRating={selectedRating}
                  setSelectedRating={setSelectedRating}
                  selectedBrand={selectedBrand}
                  setSelectedBrand={setSelectedBrand}
                />
              </Grid>
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
