import React, { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  useScrollTrigger,
  Button,
  Zoom,
  Fab,
  Badge,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginTop: "20px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    display: "block",
  },
  button: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [iconMoreAnchorEl, setIconMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isIconMenuOpen = Boolean(iconMoreAnchorEl);

  const { totalCartItems } = useContext(CartContext);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleIconOpen = (event) => {
    setIconMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleIconClose = () => {
    setIconMoreAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const iconMenuId = "primary-search-account-menu-mobile";
  const renderIconMenu = (
    <Menu
      anchorEl={iconMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={iconMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isIconMenuOpen}
      onClose={handleIconClose}
    >
      <MenuItem onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleMenuClose}>About</MenuItem>
      <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow}>
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>
              <div className={classes.sectionMobile}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-controls={iconMenuId}
                  color="inherit"
                  aria-label="open drawer"
                  aria-haspopup="true"
                  onClick={handleIconOpen}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <Typography className={classes.title} variant="h6" noWrap>
                All Categories
              </Typography>
              <div className={classes.button}>
                <Button onClick={() => history.push("/")} color="inherit">
                  Home
                </Button>
                <Button onClick={() => history.push("/about")} color="inherit">
                  About
                </Button>
                <Button
                  onClick={() => history.push("/contact-us")}
                  color="inherit"
                >
                  Contact Us
                </Button>
                <Button
                  onClick={() => history.push("/collection")}
                  color="inherit"
                >
                  Products
                </Button>
              </div>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="cart items"
                  color="inherit"
                  onClick={() => {
                    history.push("/cart");
                  }}
                >
                  <Badge badgeContent={totalCartItems} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="cart items"
                  color="inherit"
                  onClick={() => {
                    history.push("/wish-list");
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

        {renderIconMenu}
        {renderMobileMenu}
        {renderMenu}
      </div>
    </>
  );
}
