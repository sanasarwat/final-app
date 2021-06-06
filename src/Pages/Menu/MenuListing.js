import React from "react";
import Menu from "./Menu";
import { Container, Typography, Box } from "@material-ui/core";

// import { category } from "../../data/category";
import { category } from "../../data/category";
//import { makeStyles } from "@material-ui/core/styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const useStyle = makeStyles((theme) => ({
//   nav: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//   },
// }));

export default function MenuListing(props) {
  // const classes = useStyle();
  const { setSelectedMenu } = props;
  //console.log(setSelectedMenu);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <Box py={1} align="left">
          <Typography variant="h4">Products Categories</Typography>
        </Box>
        <Slider {...settings}>
          {category.map((category) => (
            <Box item key={category.id}>
              <Menu category={category} setSelectedMenu={setSelectedMenu} />
            </Box>
          ))}
        </Slider>
      </Container>
    </>
  );
}
