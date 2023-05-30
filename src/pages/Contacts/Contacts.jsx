/* eslint-disable react-refresh/only-export-components */
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData } from "react-router-dom";
import FilterlistBox from "../../components/FilterBox";
import { useState } from "react";
import { Avatar, Grid, Card, CardHeader, Chip, Typography } from "@mui/material";

const Contacts = () => {
  const { t } = useTranslation();
  const keys = ["Active", "Inactive"];
  const [filterBy, setFilterBy] = useState("Active");
  const navigate = useNavigate();
  const { contactList } = useLoaderData();
  const { users } = contactList;

  const filterProps = {
    keys: keys,
    filterBy: filterBy,
    setFilterBy: setFilterBy,
  };

  return (
    <div>
      <FilterlistBox {...filterProps} />
      <Typography p={2} component={"h4"} variant="h4">
        {t("pages.contacts.title")}
      </Typography>
      <Grid p={1} container spacing={1} alignItems={"stretch"}>
        {users.map((item, index) => (
          <Grid key={index} xs={12} sm={4} item>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(item.id.toString());
              }}
            >
              <CardHeader
                sx={{ height: "6vw" }}
                avatar={
                  <Avatar sx={{ backgroundColor: item.eyeColor }}>{item.firstName[0] + item.firstName[1]}</Avatar>
                }
                action={
                  <Chip label={index % 2 === 0 ? "Acitve" : "Inactive"} color={index % 2 === 0 ? "success" : "error"} />
                }
                title={item.firstName}
                subheader={item.address.address}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Contacts;
