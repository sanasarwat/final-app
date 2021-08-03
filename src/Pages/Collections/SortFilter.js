import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

const sortOptions = [
  { value: "RatingHighToLow", title: "Rating High to Low" },
  { value: "RatingLowToHigh", title: "Rating Low to High" },
  { value: "PriceHighToLow", title: "Price High to Low" },
  { value: "PriceLowToHigh", title: "Price Low to High" },
];

export default function SortFilter(props) {
  const { sortBy, setSortBy } = props;

  return (
    <Box mb={3}>
      <FormControl>
        <InputLabel id="sort-prods">Sort By: </InputLabel>
        <Select
          labelId="sort-prods"
          value={sortBy || "RatingHighToLow"}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
