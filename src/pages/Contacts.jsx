import { useLoaderData } from "react-router-dom";
import FilterlistBox from "../components/FilterBox";
import { useState } from "react";
import { Avatar, Grid, Card, CardHeader, Chip } from "@mui/material";

const Contacts = () => {
  const keys = ["Active", "Inactive"];
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Active");
  const { users } = useLoaderData();

  const filterProps = {
    keys: keys,
    searchValue: search,
    setSearchValue: setSearch,
    filterBy: filterBy,
    setFilterBy: setFilterBy,
  };

  return (
    <div>
      <FilterlistBox {...filterProps} />
      <Grid p={1} container spacing={1}>
        {users.map((item, index) => (
          <Grid key={index} xs={12} sm={4} item>
            <Card>
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
