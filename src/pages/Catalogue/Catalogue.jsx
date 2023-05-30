import { useTranslation } from "react-i18next";
import BoxHeader from "../../components/BoxHeader";
import ImageUpload from "../../components/ImageUpload";
import { Box, Stack, Typography } from "@mui/material";

const Catalogue = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ height: 1080, overflow: "auto" }}>
      <BoxHeader title={t("pages.catalogue.title")} />
      <Stack marginBottom={2}>
        <Typography textAlign="center" variant="h4" component="h1" gutterBottom>
          Single Image Upload
        </Typography>
        <ImageUpload limit={1} multiple={false} name="image" />
      </Stack>
      {/* Multiple Image Upload */}
      <Typography textAlign="center" variant="h4" component="h1" gutterBottom>
        Multiple Image Upload
      </Typography>
      <ImageUpload limit={5} multiple name="images" />
    </Box>
  );
};

export default Catalogue;
