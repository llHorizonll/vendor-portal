import { useSubmit, useSearchParams } from "react-router-dom";
import { Form } from "react-router-dom";
import { Grid, Paper, TextField, InputAdornment, Icon, Chip, IconButton } from "@mui/material";
import PropTypes from "prop-types";

export default function FilterlistBox({ keys, filterBy, setFilterBy, noFilter = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const submit = useSubmit();
  const q = searchParams.get("q");

  return (
    <Paper
      sx={{
        p: 2,
        flexGrow: 1,
        backgroundColor: "seconday.main",
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
                backgroundColor: "text.main",
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
                    <IconButton
                      onClick={() => {
                        setSearchParams();
                        submit();
                      }}
                    >
                      <Icon>close</Icon>
                    </IconButton>
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
