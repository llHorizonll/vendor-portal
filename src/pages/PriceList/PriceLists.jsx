import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { useTranslation } from "react-i18next";
import { useNavigate, useLoaderData, Link } from "react-router-dom";
import {
  Avatar,
  TextField,
  Box,
  Grid,
  Card,
  CardHeader,
  Chip,
  IconButton,
  CardContent,
  CardActions,
  Button,
  Typography,
  Toolbar,
  Stack,
  Icon,
  Container,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import list from "./data.json";

const PriceLists = () => {
  //List Card PriceList
  const ListCard = () => {
    const theme = useTheme();
    // const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleCardClick = (pricelistId) => {
      navigate(`/price-lists/${pricelistId}`);
    };

    return (
      <>
        {list.map((data, index) => {
          return (
            <div key={data.id}>
              {/* <Link to={`/price-lists/${data.id}`} underline="none"> */}
              <Card
                sx={{ width: 1, cursor: "pointer" }}
                onClick={() => {
                  handleCardClick(data.id);
                }}
              >
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid xs={8} item>
                      <Typography sx={{ fontSize: 18 }} gutterBottom>
                        {data.pricelist_master.name}
                      </Typography>
                    </Grid>
                    <Grid textAlign="end" xs={4} item>
                      <Typography sx={{ fontSize: 18 }} gutterBottom>
                        {data.pricelist_master.status}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0}>
                    <Grid xs={8} item>
                      <Grid container>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                          {data.pricelist_master.vendor_id}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14, marginLeft: "20px" }}
                          gutterBottom
                        >
                          {data.pricelist_master.start_date +
                            " - " +
                            data.pricelist_master.end_date}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid textAlign="end" xs={4} item>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        <Chip
                          label={index % 2 === 0 ? "Active" : "Inactive"}
                          color={index % 2 === 0 ? "success" : "error"}
                        />
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              {/* </Link> */}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Grid width={1} position={"fixed"}>
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
                  <CloseIcon
                    textAlign={"end"}
                    sx={{ marginTop: 0.5, color: "#D8D9DA" }}
                  />
                </Stack>
              </Box>
              <FilterListIcon />
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
        </Box>
        {/* Blue card */}
        <Grid width={1}>
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
      </Grid>
      <Box mt={21}>
        <ListCard />
      </Box>
    </>
  );
};

export default PriceLists;
