import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "@/hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { login } = useAuth();
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      username: data.get("email"),
      password: data.get("password"),
    });
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
          <Typography component="h5" variant="h5" sx={{ marginTop: 2, marginBottom: 2 }}>
            {t("pages.login.title")}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{ marginBottom: 3 }}
              size="small"
              required
              fullWidth
              name="email"
              label={t("pages.login.fields.email")}
              placeholder={t("pages.login.placeholder.email")}
              autoFocus
            />
            <TextField
              sx={{ marginBottom: 3 }}
              size="small"
              required
              fullWidth
              name="password"
              label={t("pages.login.fields.password")}
              placeholder={t("pages.login.placeholder.password")}
              type="password"
            />
            <Grid container>
              <Grid item xs>
                <NavLink to="/forgotPassword" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/register">{"Create an account"}</NavLink>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 30, mb: 2 }}>
              {t("pages.login.buttons.submit")}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
