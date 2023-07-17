import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BoxHeader from "../../components/BoxHeader";
import ImageUpload from "../../components/ImageUpload";
import { ToggleButton, ToggleButtonGroup, Icon, Grid, Box, Typography, TextField, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const EditCatalogue = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { product, params } = useLoaderData();
  const { catalogueId } = params;
  const [fileList, setFileList] = useState(product?.images);

  const [mode, setMode] = useState("edit");

  const handleMode = (_, mode) => {
    setMode(mode);
  };

  const MuiButtonGroup = () => {
    return (
      <ToggleButtonGroup
        size="small"
        color={mode === "delete" ? "error" : "primary"}
        value={mode}
        exclusive
        onChange={handleMode}
        aria-label="text alignment"
        sx={{ mr: 4 }}
      >
        <ToggleButton value="edit" aria-label="edit" disabled>
          <Icon>edit</Icon>
        </ToggleButton>
        <ToggleButton value="delete" aria-label="delete" disabled>
          <Icon>delete</Icon>
        </ToggleButton>
      </ToggleButtonGroup>
    );
  };

  return (
    <>
      <BoxHeader title={t("pages.catalogue.title")} parentPath="/catalogue" ButtonElement={MuiButtonGroup} />
      <Box px={2}>
        {/* Multiple Image Upload */}
        <ImageUpload fileList={fileList} setFileList={setFileList} limit={10} name="images" />
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <TextField size="small" label="Name" fullWidth />
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField size="small" label="Name" fullWidth />
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField size="small" label="Name" fullWidth />
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField size="small" label="Name" fullWidth />
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField size="small" label="Name" fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField size="small" label="Description" fullWidth multiline rows={4} />
          </Grid>
          <Grid xs={12} item>
            <TextField size="small" label="Specifications" fullWidth />
          </Grid>
        </Grid>
        <Box mt={1} mb={1}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>} aria-controls="packaging-content">
              <Typography>Packaging</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <Box px={2}>
        {mode === "edit" && (
          <Grid container spacing={2} mt={1} mb={2}>
            <Grid xs={12} sm={6} md={3} item>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Save
              </Button>
            </Grid>
            <Grid xs={12} sm={6} md={3} item>
              <Button
                variant="contained"
                color="inherit"
                fullWidth
                onClick={() => (mode === "add" ? navigate("/catalogue") : navigate(`/catalogue/${catalogueId}`))}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default EditCatalogue;
