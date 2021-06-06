import React from "react";
import { brandTitle } from "../../data/brand";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function BrandFilterItem(props) {
  const { brand, isChecked, onChangeBrand } = props;
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={(event) => onChangeBrand((brand, event.target.checked))}
          />
        }
        label={brand}
      />
    </FormGroup>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
  },
});

export function BrandFilter(props) {
  let { selectedBrand, onChangeBrand } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Accordion square elevation={1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Filter By Brand Name
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              {brandTitle.map((brand) => (
                <BrandFilterItem
                  key={brand}
                  brand={brand}
                  isChecked={selectedBrand.includes(brand)}
                  onChangeBrand={onChangeBrand}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
