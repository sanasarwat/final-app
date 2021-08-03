import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {
  FormControl,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@material-ui/core/";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const sortOptions = [
  { value: "UniLiver", title: "UniLiver" },
  { value: "LU", title: "LU" },
  { value: "ABC", title: "ABC" },
];
export default function BrandFilter(props) {
  const { selectedBrand, setSelectedBrand } = props;
  //console.log(selectedBrand);
  return (
    <div>
      <Accordion square elevation={1}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              Brands Filter
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            {/* <InputLabel id="sort-prods">Brand By: </InputLabel> */}
            <Select
              labelId="sort-prods"
              value={selectedBrand || "UniLiver"}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {sortOptions.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
