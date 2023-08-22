/* eslint-disable react-refresh/only-export-components */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData } from "react-router-dom";
import { Avatar, Grid, Card, CardHeader, Chip } from "@mui/material";
import BoxHeader from "../../components/BoxHeader";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contacts = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { contactList } = useLoaderData();
  const { users } = contactList;

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName", //access nested data with dot notation
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address.address", //normal accessorKey
        header: "Address",
      },
    ],
    []
  );

  return (
    <>
      <BoxHeader title={t("pages.contacts.title")} />
     

      {matchesSm && (
        <MaterialReactTable
          columns={columns}
          data={users}
          state={{ isLoading: !users }}
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => {
              navigate(row.original.id.toString());
            },
            sx: {
              cursor: "pointer", //you might want to change the cursor too when adding an onClick
            },
          })}
          enableDensityToggle={false}
        />
      )}

      {!matchesSm && (
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
                    <Chip
                      label={index % 2 === 0 ? "Active" : "Inactive"}
                      color={index % 2 === 0 ? "success" : "error"}
                    />
                  }
                  title={item.firstName}
                  subheader={item.address.address}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Contacts;
