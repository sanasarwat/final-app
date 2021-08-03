import React from "react";
import { categoryTitles } from "../../data/category";
import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.status.danger,
    "&:checked": {
      color: theme.palette.status.danger,
    },
  },
}));

function CategoryFilterItem(props) {
  const classes = useStyles();
  const { category, isChecked, onChangeCategory } = props;
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
            checked={isChecked}
            onChange={(e) => onChangeCategory(category, e.target.checked)}
          />
        }
        label={category}
        variant="subtitle2"
      />
    </FormGroup>
  );
}

export function CategoryFilter(props) {
  let { selectedCategories, setSelectedCategories } = props;

  const onChangeCategory = (category, isChecked) => {
    if (isChecked) setSelectedCategories([...selectedCategories, category]);
    else
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
  };
  return (
    <>
      <Accordion square elevation={1}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              Categories Filter
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {categoryTitles.map((category) => (
              <CategoryFilterItem
                key={category}
                category={category}
                isChecked={selectedCategories.includes(category)}
                onChangeCategory={onChangeCategory}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
