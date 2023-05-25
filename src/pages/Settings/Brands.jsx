import { useTranslation } from "react-i18next";
import BoxHeader from "../../components/BoxHeader";
import FilterlistBox from "../../components/FilterBox";

const Brands = () => {
  const { t } = useTranslation();
  return (
    <>
      <FilterlistBox noFilter={true} />
      <BoxHeader title={t("pages.setting.brands.title")} />
    </>
  );
};

export default Brands;
