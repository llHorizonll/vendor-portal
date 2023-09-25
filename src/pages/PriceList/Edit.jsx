// import { useMemo } from "react";
// import { MaterialReactTable } from "material-react-table";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  useNavigate,
  useLoaderData,
  // useSubmit,
  // Await,
  // useParams,
  // useLocation,
  Form,
} from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Grid,
  Divider,
  MenuItem,
  InputLabel,
  Select,
  // Icon,
  FormControl,
  // ToggleButton,
  // ToggleButtonGroup,
} from "@mui/material";
import BoxHeader from "../../components/BoxHeader";
import { useForm, Controller } from "react-hook-form";

function Edit() {
  // get element by id
  // const { pricelistId } = useParams();
  // const card = cardsData.find((cards) => cards.id === (pricelistId));
  // const submit = useSubmit();
  const { t } = useTranslation();
  const [mode, setMode] = useState();
  const navigate = useNavigate();
  const { params } = useLoaderData();
  const { pricelistId } = params;
  

  //Select declare
  const [status, setStatus] = useState("");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  // const handleMode = (_, mode) => {
    
  // };
setMode(mode);
  // const methods = useForm({
  //   defaultValues: {
  //     pricelistName: pricelist?.pricelist_master.name,
  //     list: "",
  //     revision: "",
  //     lastUpdate: "",
  //     dateValid: "",
  //     till: "",
  //     issue: "",
  //   },
  // });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ( data) => {
    // methods.push(fromdata);
    console.log(data);
  };

  // const ButtonGroup = () => {
  //   return (
  //     <ToggleButtonGroup
  //       size="small"
  //       color={mode === "delete" ? "error" : "primary"}
  //       value={mode}
  //       exclusive
  //       onChange={handleMode}
  //       aria-label="text alignment"
  //     >
  //       <ToggleButton value="edit" aria-label="edit">
  //         <Icon>edit</Icon>
  //       </ToggleButton>
  //       <ToggleButton value="delete" aria-label="delete">
  //         <Icon>delete</Icon>
  //       </ToggleButton>
  //     </ToggleButtonGroup>
  //   );
  // };

  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorKey: "sku", //access nested data with dot notation
  //       header: "SKU",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "description", //access nested data with dot notation
  //       header: "Description",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "min", //access nested data with dot notation
  //       header: "Min",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "unit", //access nested data with dot notation
  //       header: "Unit",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "retail", //access nested data with dot notation
  //       header: "Retail",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "disc_percent", //access nested data with dot notation
  //       header: "Disc.%",
  //       size: 150,
  //     },
  //     {
  //       accessorKey: "price", //access nested data with dot notation
  //       header: "Price",
  //     },
  //   ],
  //   []
  // );

  return (
    <>
      <BoxHeader title={t("pages.pricelist.title")} parentPath="/price-lists" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box px={2} mb={2}>
          <Grid container>
            <Grid xs={12} sm={6} item>
              <Grid container spacing={2}>
                <Grid xs={3} item>
                  <Controller
                    name="list"
                    control={control}
                    rules={{ required: "require list" }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label="List #"
                        fullWidth
                        error={Boolean(errors.list)}
                        helperText={errors.list?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid xs={2} item>
                  <Controller
                    name="revision"
                    control={control}
                    rules={{ required: "require revision" }}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label="Revision"
                        fullWidth
                        error={Boolean(errors.revision)}
                        helperText={errors.revision?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid xs={5} item>
                  <Controller
                    name="lastUpdate"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label="Last updated"
                        fullWidth
                        error={false}
                        {...field}
                      />
                    )}
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
                      value={status}
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
                  <Controller
                    name="pricelistName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label="Pricelist name"
                        fullWidth
                        error={false}
                        {...field}
                      />
                    )}
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
                    <Controller
                      name="dateValid"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label="Date valid from"
                          fullWidth
                          error={false}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <Controller
                      name="till"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label="Till"
                          fullWidth
                          error={false}
                          {...field}
                        />
                      )}
                    />
                  </Grid>

                  <Grid xs={12} item>
                    <Controller
                      name="issue"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label="Issue to"
                          fullWidth
                          error={false}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box px={2}>
          <Grid container spacing={2} mt={1} mb={2}>
            <Grid xs={12} sm={6} md={4} item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={Object.keys(errors).length > 0}
              >
                Save
              </Button>
            </Grid>
            <Grid xs={12} sm={6} md={4} item>
              <Button
                variant="contained"
                color="inherit"
                fullWidth
                onClick={() =>
                  mode === "add"
                    ? navigate("/price-lists")
                    : navigate(`/price-lists/${pricelistId}`)
                }
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* <MaterialReactTable data={""} columns={columns}></MaterialReactTable> */}
      </Form>
    </>
  );
}

export default Edit;
