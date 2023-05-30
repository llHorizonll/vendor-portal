import PropTypes from "prop-types";
import { Box, Typography, Icon, Button } from "@mui/material";

const BoxHeader = ({ title, CreateFnc, ButtonElement }) => {
  return (
    <Box p={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Typography component={"h5"} variant="h5">
        {title}
      </Typography>
      {ButtonElement && <ButtonElement />}
      {CreateFnc && (
        <Button variant="contained" color="primary" startIcon={<Icon>add</Icon>} onClick={() => CreateFnc()}>
          Create
        </Button>
      )}
    </Box>
  );
};

export default BoxHeader;

BoxHeader.propTypes = {
  title: PropTypes.string,
  CreateFnc: PropTypes.func,
  ButtonElement: PropTypes.func,
};
