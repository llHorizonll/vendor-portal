/* eslint-disable react-refresh/only-export-components */
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData } from "react-router-dom";
import FilterlistBox from "../../components/FilterBox";
import { useState } from "react";
import { Avatar, Grid, Card, CardHeader, Chip } from "@mui/material";
import BoxHeader from "../../components/BoxHeader";

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
      <BoxHeader title={t("pages.contacts.title")} />
      <Grid p={1} container spacing={1} alignItems={"stretch"}>
        {users.map((item, index) => (
          <Grid key={index} xs={12} md={4} item>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(item.id.toString());
              }}
            >
              <CardHeader
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
