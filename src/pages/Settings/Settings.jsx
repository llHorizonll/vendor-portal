import React from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Brands from "./Brands";
import Category from "./Category";
import CompanyProfile from "./CompanyProfile";
import Unit from "./Unit";
import Users from "./Users";
import ViewLog from "./ViewLog";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: "100%" }}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    variant: "fullWidth",
    sx: { alignItems: "flex-start", textTransform: "none" },
  };
}

export default function Settings() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [value, setValue] = React.useState(1);
  const { t } = useTranslation();
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: matchesSm ? "flex" : "block" }}>
      {matchesSm ? (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", width: 200 }}
        >
          <Tab label="Lookups" disabled {...a11yProps(0)} />
          <Tab label={t("pages.setting.brands.title")} {...a11yProps(1)} />
          <Tab label={t("pages.setting.unit.title")} {...a11yProps(2)} />
          <Tab label={t("pages.setting.category.title")} {...a11yProps(3)} />
          <Tab label="System" disabled {...a11yProps(4)} />
          <Tab label={t("pages.setting.company.title")} {...a11yProps(5)} />
          <Tab label={t("pages.setting.users.title")} {...a11yProps(6)} />
          <Tab label={t("pages.setting.logs.title")} {...a11yProps(7)} />
        </Tabs>
      ) : (
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          <Tab disabled sx={{ minWidth: "1px", padding: 0 }} />
          <Tab label={t("pages.setting.brands.title")} {...a11yProps(1)} />
          <Tab label={t("pages.setting.unit.title")} {...a11yProps(2)} />
          <Tab label={t("pages.setting.category.title")} {...a11yProps(3)} />
          <Tab disabled sx={{ minWidth: "1px", padding: 0 }} />
          <Tab label={t("pages.setting.company.title")} {...a11yProps(5)} />
          <Tab label={t("pages.setting.users.title")} {...a11yProps(6)} />
          <Tab label={t("pages.setting.logs.title")} {...a11yProps(7)} />
        </Tabs>
      )}

      <TabPanel value={value} index={1}>
        <Brands />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Unit />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Category />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CompanyProfile />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ViewLog />
      </TabPanel>
    </Box>
  );
}
