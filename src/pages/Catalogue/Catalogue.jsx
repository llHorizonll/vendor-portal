/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData } from "react-router-dom";
import FilterlistBox from "../../components/FilterBox";
import { Avatar, Grid, Card, CardHeader, Typography, Box } from "@mui/material";
import BoxHeader from "../../components/BoxHeader";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Catalogue = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productList } = useLoaderData();
  const { products } = productList;

  const columns = useMemo(
    () => [
      {
        accessorKey: "thumbnail",
        //accessorFn: (row) => ,
        //id: "thumbnail",
        header: "",
        size: 50,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
        Cell: ({ cell }) => (
          <Box display={"flex"} justifyContent={"center"}>
            <Avatar src={cell.getValue().toString()} variant="rounded" />
          </Box>
        ),
        enableColumnActions: false,
      },
      {
        accessorKey: "title",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 400,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 50,
      },
    ],
    []
  );

  return (
    <>
      <BoxHeader title={t("pages.catalogue.title")} />
      {!matchesSm && <FilterlistBox noFilter={true} />}

      {matchesSm && (
        <MaterialReactTable
          columns={columns}
          data={products}
          state={{ isLoading: !products }}
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
          {products.map((item, index) => (
            <Grid key={index} xs={12} item>
              <Card
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(item.id.toString());
                }}
              >
                <CardHeader
                  avatar={<Avatar src={item.thumbnail} variant="rounded"></Avatar>}
                  action={<Typography variant="body2">{item.category}</Typography>}
                  title={item.title}
                  subheader={item.description}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Catalogue;
