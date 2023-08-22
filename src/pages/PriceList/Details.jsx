import * as React from "react";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { useTranslation } from "react-i18next";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Suspense, useState } from "react";
import {
  useNavigate,
  useLoaderData,
  Await,
  useParams,
  useLocation,
} from "react-router-dom";
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
  AppBar,
  Toolbar,
  Stack,
  Icon,
  Container,
  Paper,
  Link,
  Divider,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import SelectThaiAddress from "../../components/SelectThaiAddress";
import BoxHeader from "../../components/BoxHeader";
import listdata from "./data.json";

function Detail() {
  const { pricelistId } = useParams();
  const list = listdata.find((data) => data.id === parseInt(pricelistId));
  console.log(list);
  const navigate = useNavigate();
  const [mode, setMode] = useState();
  const [age, setAge] = React.useState("");
  const { t } = useTranslation();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "sku", //access nested data with dot notation
        header: "SKU",
        size: 150,
      },
      {
        accessorKey: "description", //access nested data with dot notation
        header: "Description",
        size: 150,
      },
      {
        accessorKey: "min", //access nested data with dot notation
        header: "Min",
        size: 150,
      },
      {
        accessorKey: "unit", //access nested data with dot notation
        header: "Unit",
        size: 150,
      },
      {
        accessorKey: "retail", //access nested data with dot notation
        header: "Retail",
        size: 150,
      },
      {
        accessorKey: "disc_percent", //access nested data with dot notation
        header: "Disc.%",
        size: 150,
      },
      {
        accessorKey: "price", //normal accessorKey
        header: "Price",
      },
    ],
    []
  );

  return (
    <>
      <BoxHeader title={t("pages.pricelist.title")} />
      <Box px={2} mb={2}>
        <Grid container>
          <Grid xs={12} sm={6} item>
            <Grid container spacing={2}>
              <Grid xs={3} item>
                <TextField
                  size="small"
                  label="List #"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={2} item>
                <TextField
                  size="small"
                  label="Revision"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={5} item>
                <TextField
                  size="small"
                  label="Last updated"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={2} item>
                <FormControl sx={{ minWidth: 80 }} size="small">
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Draft
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                    size="small"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  value={list.id}
                  size="small"
                  label="Pricelist name"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider
            sx={{ marginInline: 2 }}
            orientation="vertical"
            flexItem
          ></Divider>
          <Grid xs item>
            <Grid xs={12} item>
              <Grid container spacing={2}>
                <Grid xs={6} item>
                  <TextField
                    size="small"
                    label="Date valid from"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    size="small"
                    label="Till"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    size="small"
                    label="Issue to"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Grid container xs={12} sm={6} item>
            <TextField id="" label="" />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Detail;
