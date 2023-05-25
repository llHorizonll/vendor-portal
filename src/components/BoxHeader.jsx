import PropTypes from "prop-types";
import { Box, Typography, Icon, Button } from "@mui/material";

const BoxHeader = ({ title, noButton, CreateFnc }) => {
  return (
    <Box p={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Typography component={"h5"} variant="h5">
        {title}
      </Typography>
      {!noButton ? (
        <Button variant="contained" color="primary" startIcon={<Icon>add</Icon>} onClick={() => CreateFnc()}>
          Create
        </Button>
      ) : null}
    </Box>
  );
};

export default BoxHeader;

BoxHeader.propTypes = {
  title: PropTypes.string,
  noButton: PropTypes.bool,
  CreateFnc: PropTypes.func,
};
