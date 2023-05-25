import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function RegisterSuccess() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
            marginBottom: 20,
          }}
        >
          <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2, textAlign: "center" }}>
            {t("pages.registerSuccess.title")}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2, textAlign: "left" }}>
            {t("pages.registerSuccess.subtitle")}
          </Typography>
        </Box>
        <Box p={4}>
          <Button fullWidth variant="contained" color="primary" onClick={() => navigate("/")}>
            {t("buttons.ok")}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
