/* eslint-disable react-refresh/only-export-components */
import { Suspense, useState } from "react";
import { useNavigate, useLoaderData, Await } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToggleButton, ToggleButtonGroup, Icon, Grid, Box, Typography, Avatar, Chip, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import BoxHeader from "../../components/BoxHeader";
import { css } from "@emotion/css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const imgMobileCenter = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

const imgCenter = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ViewCatalogue = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const { product, params } = useLoaderData();
  const { catalogueId } = params;
  const { t } = useTranslation();
  const [mode, setMode] = useState();

  const handleMode = (_, mode) => {
    if (mode === "edit") {
      navigate(`/catalogue/${catalogueId}/edit`);
    }
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
        <ToggleButton value="edit" aria-label="edit">
          <Icon>edit</Icon>
        </ToggleButton>
        <ToggleButton value="delete" aria-label="delete">
          <Icon>delete</Icon>
        </ToggleButton>
      </ToggleButtonGroup>
    );
  };

  return (
    <>
      <BoxHeader title={t("pages.catalogue.title")} parentPath="/catalogue" ButtonElement={MuiButtonGroup} />
      <Suspense fallback={<small>Loading Comments...</small>}>
        <Await resolve={product}>
          <Box px={2}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Box pt={2} sx={{ border: "1px solid rgba(0, 0, 0, 0.38)", borderRadius: 4 }}>
                  <swiper-container
                    navigation="true"
                    pagination="true"
                    centered_slides="true"
                    centered_slides_bounds="true"
                    setWrapperSize="true"
                    watchOverflow="false"
                  >
                    {product?.images.map((item, index) => (
                      <swiper-slide key={index} lazy="true">
                        <img src={item} className={matchesSm ? imgCenter : imgMobileCenter} loading="lazy" />
                      </swiper-slide>
                    ))}
                  </swiper-container>
                </Box>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  label="Name"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <TextField
                  size="small"
                  label="Name"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <TextField
                  size="small"
                  label="Name"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <TextField
                  size="small"
                  label="Name"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <TextField
                  size="small"
                  label="Name"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  label="Description"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  label="Specifications"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Await>
      </Suspense>
    </>
  );
};

export default ViewCatalogue;
