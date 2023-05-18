import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function RegisterCompany() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    navigate("/register2");
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        mt={20}
        p={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#1A4999",
          borderRadius: "8px 8px 0px 0px",
        }}>
        <Typography component="h4" variant="h4" display="inline">
          <b style={{ color: "#339AF0" }}>Vendor</b>
          <b style={{ color: "#fff" }}>Portal</b>
        </Typography>
      </Box>
      <Paper elevation={4}>
        <Box
          p={4}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2, textAlign: "center" }}>
            {t("pages.registerCompany.title")}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2, textAlign: "left" }}>
            {t("pages.registerCompany.subtitle")}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="company"
                  label={t("pages.registerCompany.fields.company")}
                  placeholder={t("pages.registerCompany.placeholder.company")}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="address1"
                  label={t("pages.registerCompany.fields.address1")}
                  placeholder={t("pages.registerCompany.placeholder.address1")}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="address2"
                  label={t("pages.registerCompany.fields.address2")}
                  placeholder={t("pages.registerCompany.placeholder.address2")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label={t("pages.registerCompany.fields.sub_district")}
                  placeholder={t("pages.registerCompany.placeholder.sub_district")}
                  name="sub_district"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  name="district"
                  label={t("pages.registerCompany.fields.district")}
                  placeholder={t("pages.registerCompany.placeholder.district")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  label={t("pages.registerCompany.fields.province")}
                  placeholder={t("pages.registerCompany.placeholder.province")}
                  name="province"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  name="country"
                  label={t("pages.registerCompany.fields.country")}
                  placeholder={t("pages.registerCompany.placeholder.country")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  name="postcode"
                  label={t("pages.registerCompany.fields.postcode")}
                  placeholder={t("pages.registerCompany.placeholder.postcode")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  name="branch"
                  label={t("pages.registerCompany.fields.branch")}
                  placeholder={t("pages.registerCompany.placeholder.branch")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  name="tax_id"
                  label={t("pages.registerCompany.fields.tax_id")}
                  placeholder={t("pages.registerCompany.placeholder.tax_id")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  fullWidth
                  name="business_id"
                  label={t("pages.registerCompany.fields.business_id")}
                  placeholder={t("pages.registerCompany.placeholder.business_id")}
                />
              </Grid>
              <Grid item xs={12}>
                Please click{" "}
                <NavLink to="/login" variant="body2">
                  sign in
                </NavLink>{" "}
                to redirect to home page
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {t("pages.registerCompany.buttons.submit")}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
