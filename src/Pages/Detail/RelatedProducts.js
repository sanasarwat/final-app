import { products } from "../../data/products";
import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

export default function RelatedProducts() {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
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
        breakpoint: 600,
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
    <>
      <div className={classes.root}>
        <Container>
          <Typography variant="h4">Related Products</Typography>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id}>
                <Card style={{ margin: "20px 0px 20px 4px", width: "200px" }}>
                  <CardActionArea>
                    <CardContent>
                      <img
                        style={{ width: "100%" }}
                        src={product.image}
                        alt="relatedproduct"
                      />
                      <h3>{product.title}</h3>
                      <h3>Rs. {product.price}</h3>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
}
