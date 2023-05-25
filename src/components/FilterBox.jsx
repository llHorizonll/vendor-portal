import { useLoaderData, useSubmit } from "react-router-dom";
import { Form } from "react-router-dom";
import { Grid, Paper, TextField, InputAdornment, Icon, Chip } from "@mui/material";
import PropTypes from "prop-types";

export default function FilterlistBox({ keys, filterBy, setFilterBy, noFilter = false }) {
  const { q } = useLoaderData();
  const submit = useSubmit();

  return (
    <Paper
      sx={{
        p: 2,
        flexGrow: 1,
        backgroundColor: "#EEEEEE",
        borderRadius: 0,
      }}
    >
      <Form id="search-form" role="search">
        <Grid container spacing={2} direction="row" alignItems={"center"}>
          <Grid item xs={12} sm={4}>
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#fff",
                borderRadius: 10,
                [`& fieldset`]: {
                  borderRadius: 10,
                },
              }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon>close</Icon>
                  </InputAdornment>
                ),
              }}
              // value={searchValue}
              // onChange={(e) => setSearchValue(e.target.value)}
              id="q"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                submit(event.currentTarget.form);
              }}
            />
          </Grid>
          {!noFilter && (
            <Grid item xs={12} sm={4}>
              {keys.map((item, index) => (
                <Chip
                  key={index}
                  sx={{ marginRight: 2 }}
                  label={item}
                  size="small"
                  color={filterBy === item ? "primary" : "default"}
                  onClick={(e) => setFilterBy(e.target.outerText)}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Form>
    </Paper>
  );
}

FilterlistBox.propTypes = {
  keys: PropTypes.array,
  filterBy: PropTypes.string,
  setFilterBy: PropTypes.func,
  noFilter: PropTypes.bool,
};
