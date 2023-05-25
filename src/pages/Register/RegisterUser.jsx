import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterUser() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleBack = () => {
    navigate("/register");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(
      {
        username: data.get("email"),
        password: data.get("password"),
      },
      "/register/success"
    );
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        mt={10}
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
          }}
        >
          <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2, textAlign: "center" }}>
            {t("pages.registerUser.title")}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2, textAlign: "left" }}>
            {t("pages.registerUser.subtitle")}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="company"
                  label={t("pages.registerUser.fields.name")}
                  placeholder={t("pages.registerUser.placeholder.name")}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="address1"
                  label={t("pages.registerUser.fields.email")}
                  placeholder={t("pages.registerUser.placeholder.email")}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  size="small"
                  fullWidth
                  name="address2"
                  label={t("pages.registerUser.fields.password")}
                  placeholder={t("pages.registerUser.placeholder.password")}
                />
              </Grid>
              <Grid item xs={12} mt={4}>
                Please click{" "}
                <NavLink to="/login" variant="body2">
                  Sign in
                </NavLink>{" "}
                to redirect to home page
              </Grid>
              <Grid item xs={12} mt={4}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={t("pages.registerUser.buttons.term")}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={12} sm={6}>
                <Button fullWidth variant="contained" color="inherit" onClick={handleBack}>
                  {t("buttons.back")}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button type="submit" fullWidth variant="contained">
                  {t("pages.registerUser.buttons.submit")}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
