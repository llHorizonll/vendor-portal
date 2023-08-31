/* eslint-disable react-refresh/only-export-components */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData } from "react-router-dom";
import {
  // Grid,
  // Card,
  // CardContent,
  // Chip,
  // Toolbar,
  // Stack,
  // TextField,
  // Typography,
  // Button, 
  Box,
} from "@mui/material";
import BoxHeader from "../../components/BoxHeader";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

const PriceLists = () => {
  // const theme = useTheme();
  // const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  // load data from service
  const pricelist = useLoaderData();
  const data = pricelist;


  const columns = useMemo(
    () => [{
      accessorKey: "pricelist_master.list",
      header: "List #",
      id: "a",
    },
    {
      accessorKey: "pricelist_master.name",
      header: "PriceListname",
      id: "b",
    },
    {
      accessorFn: (row) =>
        `${row.pricelist_master.start_date} ${row.pricelist_master.end_date}`,
      // accessorKey: "pricelist_master.start_date",
      id: "c",
      header: "Valid date",
    },
    {
      accessorKey: "pricelist_master.vendor_id",
      id: "d",
      header: "Revision",
    },
    {
      accessorKey: "pricelist_master.status",
      id: "e",
      header: "Status",
      Cell: (cell) => {
        return (         
          <>
            <Box
              component={"span"}
              sx={(theme) => ({
                backgroundColor:
                  cell.renderedCellValue === "draft"
                    ? "#EF5350"
                    : cell.renderedCellValue === "publish"
                      ? "#AED581"
                      : theme.palette.warning.dark,
                borderRadius: "2rem",
                color: "#fff",
                maxWidth: "9ch",
                width: "50px",
                p: "8px",
              })}
            >
              {cell.renderedCellValue}
            </Box>
          </>
        )
      },
    },
    ],
    []
  );

  //List Card PriceList
  // const ListCard = () => {
  //   // const theme = useTheme();
  //   // const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  //   const navigate = useNavigate();

  //   return (
  //     <div>
  //       {data.map((card, index) => {
  //         return (
  //           <div key={card.id}>
  //             {/* <Link to={`/price-lists/${card.id}`} underline="none"> */}
  //             <Card
  //               sx={{ width: 1, cursor: "pointer" }}
  //               onClick={() => {
  //                 navigate(card.id)
  //               }}
  //             >
  //               <CardContent>
  //                 <Grid container spacing={0}>
  //                   <Grid xs={8} item>
  //                     <Typography sx={{ fontSize: 18 }} gutterBottom>
  //                       {card.pricelist_master.name}
  //                     </Typography>
  //                   </Grid>
  //                   <Grid textAlign="end" xs={4} item>
  //                     <Typography sx={{ fontSize: 18 }} gutterBottom>
  //                       {card.pricelist_master.status}
  //                     </Typography>
  //                   </Grid>
  //                 </Grid>
  //                 <Grid container spacing={0}>
  //                   <Grid xs={8} item>
  //                     <Grid container>
  //                       <Typography sx={{ fontSize: 14 }} gutterBottom>
  //                         {card.pricelist_master.vendor_id}
  //                       </Typography>
  //                       <Typography
  //                         sx={{ fontSize: 14, marginLeft: "20px" }}
  //                         gutterBottom
  //                       >
  //                         {card.pricelist_master.start_date +
  //                           " - " +
  //                           card.pricelist_master.end_date}
  //                       </Typography>
  //                     </Grid>
  //                   </Grid>
  //                   <Grid textAlign="end" xs={4} item>
  //                     <Typography sx={{ fontSize: 14 }} gutterBottom>
  //                       <Chip
  //                         label={index % 2 === 0 ? "Active" : "Inactive"}
  //                         color={index % 2 === 0 ? "success" : "error"}
  //                       />
  //                     </Typography>
  //                   </Grid>
  //                 </Grid>
  //               </CardContent>
  //             </Card>
  //             {/* </Link> */}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  return (
    <>
      <BoxHeader title={t("pages.pricelist.title")} />
      {/* <Grid width={1} position={"fixed"}>
        <Box width={1} sx={{ margin: 0, padding: 0 }}>
          <Box width={1} sx={{ backgroundColor: "#D8D9DA", top: 0 }}>
            <Toolbar>
              <Box
                m={1}
                sx={{ backgroundColor: "#fff", borderRadius: 10, px: 1 }}
              >
                <Stack direction={"row"}>
                  <SearchIcon sx={{ marginTop: 0.5, color: "#D8D9DA" }} />
                  <TextField
                    width={1}
                    id="standard-basic"
                    variant="standard"
                    InputProps={{
                      resize: "none",
                      disableUnderline: true,
                    }}
                    placeholder="search..."
                  />
                </Stack>
              </Box>

              <Stack direction="row" spacing={1}>
                <Typography mx={1} variant="h6" color="initial">
                  Sort:{" "}
                </Typography>
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
              </Stack>

              <Button
                size="small"
                sx={{ marginLeft: "auto", backgroundColor: "#339AF0" }}
                variant="contained"
              >
                + create
              </Button>
            </Toolbar>
          </Box>
        </Box> */}
      {/* Blue card */}
      {/* <Grid width={1}>
          <Card sx={{ width: 1, backgroundColor: "#E3F2FD" }}>
            <CardContent>
              <Grid container spacing={0}>
                <Grid xs={8} item>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="#1E88E5"
                    gutterBottom
                  >
                    Name
                  </Typography>
                </Grid>
                <Grid textAlign="end" xs={4} item>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="#1E88E5"
                    gutterBottom
                  >
                    Status
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={0}>
                <Grid xs={8} item>
                  <Grid container>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#1E88E5"
                      gutterBottom
                    >
                      List #
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, marginLeft: "20px" }}
                      color="#1E88E5"
                      gutterBottom
                    >
                      Valid from
                    </Typography>
                  </Grid>
                </Grid>
                <Grid textAlign="end" xs={4} item>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="#1E88E5"
                    gutterBottom
                  >
                    Revision
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
      <MaterialReactTable
        columns={columns}
        data={data}
        state={{ isLoading: !data }}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => {
            navigate(row.original.id.toString());
            console.log(row);
          },
          sx: {
            cursor: "pointer",
          },
        })}
        enableDensityToggle

      />

      {/* <ListCard /> */}
    </>
  );
};

export default PriceLists;
