import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { useNavigate, NavLink } from "react-router-dom";

export default function ResetPassword() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
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
        }}
      >
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
            marginBottom: 20,
          }}
        >
          <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2, textAlign: "center" }}>
            {t("pages.resetPassword.title")}
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="address1"
                  label={t("pages.resetPassword.fields.password")}
                  placeholder={t("pages.resetPassword.placeholder.password")}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="address1"
                  label={t("pages.resetPassword.fields.confirmPassword")}
                  placeholder={t("pages.resetPassword.placeholder.confirmPassword")}
                />
              </Grid>
              <Grid item xs={12} mt={4}>
                Please click{" "}
                <NavLink to="/login" variant="body2">
                  Sign in
                </NavLink>{" "}
                to redirect to home page
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained">
                  {t("pages.resetPassword.buttons.submit")}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
