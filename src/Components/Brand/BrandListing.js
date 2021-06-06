import React from "react";
import { brands } from "../../data/brand";
import BrandCard from "./Brand";
import { Container, Box, Typography } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow({ className, style, onClick }) {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "grey",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow({ className, style, onClick }) {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "grey",
//       }}
//       onClick={onClick}
//     />
//   );
// }
export default function BrandListing() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
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
    <div>
      <Container>
        <Box py={2} align="left">
          <Typography variant="h4">Feature Brand Procut For You</Typography>
        </Box>
        <Slider {...settings}>
          {brands.map((brand) => (
            <Box key={brand.id}>
              <BrandCard brand={brand} />
            </Box>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
