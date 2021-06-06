import React from "react";
import PropTypes from "prop-types";
import { ReviewListing } from "./ReviewListing";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core/";
import RelatedProducts from "./RelatedProducts";
import Description from "./Description";
import DeliveryExchange from "./DeliveryExchange";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabRoot: {
    fontWeight: 600,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function DetailTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            className={classes.tabRoot}
            label="Description"
            {...a11yProps(0)}
          />
          <Tab className={classes.tabRoot} label="Reviews" {...a11yProps(1)} />
          <Tab
            className={classes.tabRoot}
            label="Deleivery && Return"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Description />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReviewListing />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeliveryExchange />
      </TabPanel>
      <RelatedProducts />
    </div>
  );
}
