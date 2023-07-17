/* eslint-disable react-refresh/only-export-components */
import { Suspense, useState } from "react";
import { useNavigate, useLoaderData, Await } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToggleButton, ToggleButtonGroup, Icon, Grid, TextField, Box, Typography, Avatar } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import BoxHeader from "../../components/BoxHeader";

const ViewContact = () => {
  const navigate = useNavigate();
  const { contact, params } = useLoaderData();
  const { contactId } = params;
  const { t } = useTranslation();
  const [mode, setMode] = useState();
  const [optionTag] = useState([{ name: "Phuket" }, { name: "Budget" }]);

  const handleMode = (_, mode) => {
    if (mode === "edit") {
      navigate(`/contacts/${contactId}/edit`);
    }
    setMode(mode);
  };

  const MuiButtonGroup = () => {
    // if (mode && mode !== "delete") {
    //   return (
    //     <ToggleButtonGroup
    //       size="small"
    //       color="primary"
    //       value={mode}
    //       exclusive
    //       onChange={handleMode}
    //       aria-label="text alignment"
    //     >
    //       <ToggleButton value="save" aria-label="save">
    //         <Icon color="primary">save</Icon>
    //       </ToggleButton>
    //       <ToggleButton value="cancel" aria-label="cancel">
    //         <Icon color="error">cancel</Icon>
    //       </ToggleButton>
    //     </ToggleButtonGroup>
    //   );
    // }
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

  return (
    <>
      <BoxHeader title={t("pages.contacts.title")} parentPath="/contacts" ButtonElement={MuiButtonGroup} />
      <Suspense fallback={<small>Loading Comments...</small>}>
        <Await resolve={contact}>
          <Box px={2} mb={2}>
            <Grid container spacing={4}>
              <Grid xs={12} md={4} item>
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                  Information
                </Typography>
                <Grid container spacing={1} my={1}>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Company"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Alias"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Email"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Phone"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Tax ID"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      size="small"
                      label="Branch"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      size="small"
                      label="Business ID"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="h6" sx={{ mt: 2, textTransform: "uppercase" }}>
                  Address
                </Typography>
                <Grid container spacing={1} my={1}>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Address #1"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Address #2"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  {/* <Grid xs={12} sm={6} item>
                    <SelectThaiAddress
                      delimiter={","}
                      label={"ตำบล"}
                      name={field.name}
                      value={field.value}
                      setValue={setValue}
                      readOnly
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <SelectThaiAddress
                      delimiter={","}
                      label={"อำเภอ"}
                      name={field.name}
                      value={field.value}
                      setValue={setValue}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <SelectThaiAddress
                      delimiter={","}
                      label={"จังหวัด"}
                      name={field.name}
                      value={field.value}
                      setValue={setValue}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <SelectThaiAddress
                      delimiter={","}
                      label={"รหัสไปรษณีย์"}
                      name={field.name}
                      value={field.value}
                      setValue={setValue}
                    />
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid xs={12} md={4} item>
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                  ADDITIONAL DETAILS
                </Typography>
                <Grid container spacing={1} my={1}>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Remark"
                      fullWidth
                      rows={11.4}
                      multiline
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="h6" sx={{ mt: 2, textTransform: "uppercase" }}>
                  TAGS
                </Typography>
                <Grid container spacing={1} my={1}>
                  <Grid xs={12} item>
                    <Autocomplete
                      readOnly
                      size="small"
                      multiple
                      defaultValue={optionTag}
                      options={optionTag}
                      getOptionLabel={(option) => option.name}
                      renderOption={(props, option) => <li {...props}>{option.name}</li>}
                      renderInput={(params) => <TextField label="Tags" fullWidth {...params} />}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} md={4} item>
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                  Contact person
                </Typography>
                <Grid container spacing={1} my={1}>
                  <Grid xs={12} item>
                    <Box display={"flex"} justifyContent={"center"}>
                      <Avatar sx={{ width: 64, height: 64, mb: 2 }}>{contact?.firstName[0]}</Avatar>
                    </Box>
                    {/* <AvatarUpload width={64} height={64} /> */}
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      value={contact?.firstName}
                      size="small"
                      label="Name"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Title"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Email"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      size="small"
                      label="Phone"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Await>
      </Suspense>
    </>
  );
};

export default ViewContact;
