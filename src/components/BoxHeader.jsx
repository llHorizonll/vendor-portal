import PropTypes from "prop-types";
import { Box, Typography, Icon, Button, IconButton } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const BoxHeader = ({ title, CreateFnc, parentPath, ButtonElement }) => {
  const params = useParams();
  const navigate = useNavigate();
  const checkIsDetailPage = Object.keys(params).length > 0;

  return (
    <Box p={2} px={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      {checkIsDetailPage && (
        <IconButton onClick={() => navigate(parentPath)}>
          <Icon>keyboard_backspace</Icon>
        </IconButton>
      )}
      <Typography component={"h5"} variant="h5">
        {title}
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
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
  parentPath: PropTypes.string,
  CreateFnc: PropTypes.func,
  ButtonElement: PropTypes.func,
};
