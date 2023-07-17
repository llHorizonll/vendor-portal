/* eslint-disable react-refresh/only-export-components */
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData } from "react-router-dom";
import FilterlistBox from "../../components/FilterBox";
import { useState } from "react";
import { Avatar, Grid, Card, CardHeader, Typography } from "@mui/material";
import BoxHeader from "../../components/BoxHeader";

const Catalogue = () => {
  const { t } = useTranslation();
  const keys = ["Active", "Inactive"];
  const [filterBy, setFilterBy] = useState("Active");
  const navigate = useNavigate();
  const { productList } = useLoaderData();
  const { products } = productList;

  const filterProps = {
    keys: keys,
    filterBy: filterBy,
    setFilterBy: setFilterBy,
  };

  return (
    <>
      <FilterlistBox {...filterProps} />
      <BoxHeader title={t("pages.catalogue.title")} />
      <Grid p={1} container spacing={1} alignItems={"stretch"}>
        {products.map((item, index) => (
          <Grid key={index} xs={12} item>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(item.id.toString());
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ backgroundColor: item.eyeColor }} src={item.thumbnail} variant="rounded"></Avatar>
                }
                action={<Typography variant="body2">{item.category}</Typography>}
                title={item.title}
                subheader={item.description}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Catalogue;
