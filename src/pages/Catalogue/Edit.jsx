/* eslint-disable react-refresh/only-export-components */
import { Suspense, useState } from "react";
import { useNavigate, useLoaderData, Await } from "react-router-dom";
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
      <Suspense fallback={<small>Loading Product...</small>}>
        <Await resolve={product}>
          <Box px={2}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                {/* Multiple Image Upload */}
                <ImageUpload fileList={fileList} setFileList={setFileList} limit={10} name="images" />
              </Grid>
              <Grid xs={12} md={6} item>
                <Grid container spacing={2}>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Product Name"
                      value={product.title}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <TextField
                      size="small"
                      label="Category"
                      value={product.category}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <TextField
                      size="small"
                      label="Unit"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <TextField
                      size="small"
                      label="SKU"
                      value={product.stock}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <TextField
                      size="small"
                      label="Brand"
                      value={product.brand}
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Tags"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Box mt={1} mb={2}>
                  <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<Icon>expand_more</Icon>} aria-controls="packaging-content">
                      <Typography>Packaging</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Grid xs={12} item>
                  <TextField
                    size="small"
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
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
        </Await>
      </Suspense>
    </>
  );
};

export default EditCatalogue;
