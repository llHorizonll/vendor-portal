import { useTranslation } from "react-i18next";
import BoxHeader from "../../components/BoxHeader";
import FilterlistBox from "../../components/FilterBox";
import { Box } from "@mui/material";
import AvatarUpload from "../../components/AvatarUpload";

const CompanyProfile = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ height: 1080, overflow: "auto" }}>
      <FilterlistBox noFilter={true} />
      <BoxHeader title={t("pages.setting.company.title")} noButton={true} />
      <AvatarUpload />
    </Box>
  );
};

export default CompanyProfile;
