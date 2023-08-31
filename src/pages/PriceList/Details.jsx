import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  useNavigate,
  useLoaderData,
  // Await,
  // useParams,
  // useLocation,
} from "react-router-dom";
import {
  TextField,
  Box,
  Grid,
  Divider,
  MenuItem,
  InputLabel,
  Select,
  Icon,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import BoxHeader from "../../components/BoxHeader";
// import { useForm } from "react-hook-form";

function Detail() {
  // get element by id
  // const { pricelistId } = useParams();
  // const card = cardsData.find((cards) => cards.id === (pricelistId));
  const { t } = useTranslation();
  const [mode, setMode] = useState();
  const navigate = useNavigate();
  const { params } = useLoaderData();
  const pricelistId = params;

  //Select declare
  const [state, setState] = useState("");
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleMode = (_, mode) => {
    if (mode === "edit") {
      navigate(`/price-lists/${pricelistId}/edit`);
    }
    setMode(mode);
  };

  const ButtonGroup = () => {
    return (
      <ToggleButtonGroup
        size="small"
        color={mode === "delete" ? "error" : "primary"}
        value={mode}
        exclusive
        onChange={handleMode}
        aria-label="text alignment"
      >
        <ToggleButton value="edit" aria-label="edit">
          <Icon>edit</Icon>
        </ToggleButton>
        <ToggleButton value="delete" aria-label="delete">
          <Icon>delete</Icon>
        </ToggleButton>
      </ToggleButtonGroup>
    );
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
        accessorKey: "price", //access nested data with dot notation
        header: "Price",
      },
    ],
    []
  );

  return (
    <>
      <BoxHeader
        title={t("pages.pricelist.title")}
        parentPath="/price-lists"
        ButtonElement={ButtonGroup}
      />
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
                    value={state}
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
                  value={""}
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
            sx={{ marginX: 5 }}
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
      </Box>

      <Box>
        <MaterialReactTable data={""} columns={columns}></MaterialReactTable>
      </Box>
    </>
  );
}

export default Detail;
