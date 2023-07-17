/* eslint-disable react-refresh/only-export-components */
import { Suspense, useState } from "react";
import { Form, useSubmit, useNavigate, useLoaderData, Await } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToggleButton, ToggleButtonGroup, Icon, Grid, TextField, Box, Typography, Button } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import BoxHeader from "../../components/BoxHeader";
import SelectThaiAddress from "../../components/SelectThaiAddress";
import AvatarUpload from "../../components/AvatarUpload";

const EditContact = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const { contact, params } = useLoaderData();
  const { contactId } = params;
  const { t } = useTranslation();
  const [mode, setMode] = useState("edit");
  const [optionTag] = useState([{ name: "Phuket" }, { name: "Budget" }]);
  const filter = createFilterOptions();

  const handleMode = (_, mode) => {
    setMode(mode);
  };

  const methods = useForm({
    defaultValues: {
      image: {},
      firstName: contact?.firstName,
      address1: "",
      address2: "",
      subdistrict: "",
      district: "",
      province: "",
      zipcode: "",
      branch: "",
      businessId: "",
      taxId: "",
      email: "",
      phone: "",
      remark: "",
      tags: [],
    },
  });

  const { control, setValue, handleSubmit } = methods;

  const onSubmit = async (formData) => {
    console.log(formData);

    //should be send formData but test dummydata contacts
    // await createOrUpdateContact(contact, contactId);
    submit(contact, {
      method: "put",
      action: `/contacts/${contactId}/edit`,
    });
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
        <ToggleButton value="edit" aria-label="edit" disabled>
          <Icon>edit</Icon>
        </ToggleButton>
        <ToggleButton value="delete" aria-label="delete" disabled>
          <Icon>delete</Icon>
        </ToggleButton>
      </ToggleButtonGroup>
    );
  };

  return (
    <>
      <BoxHeader title={t("pages.contacts.title")} ButtonElement={MuiButtonGroup} />
      <Suspense fallback={<small>Loading Comments...</small>}>
        <Await resolve={contact}>
          <Form method="post" action="/contacts" onSubmit={handleSubmit(onSubmit)}>
            <Box px={2}>
              <Grid container spacing={4}>
                <Grid xs={12} md={4} item>
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    Information
                  </Typography>
                  <Grid container spacing={1} my={1}>
                    <Grid xs={12} item>
                      <Controller
                        name="company"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Company" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="alias"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Alias" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Email" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Phone" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="taxId"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Tax ID" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Controller
                        name="branch"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Branch" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Controller
                        name="businessId"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Business ID" fullWidth {...field} />}
                      />
                    </Grid>
                  </Grid>
                  <Typography variant="h6" sx={{ mt: 2, textTransform: "uppercase" }}>
                    Address
                  </Typography>
                  <Grid container spacing={1} my={1}>
                    <Grid xs={12} item>
                      <Controller
                        name="address1"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Address #1" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="address2"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Address #2" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Controller
                        name="subdistrict"
                        control={control}
                        render={({ field }) => {
                          return (
                            <SelectThaiAddress
                              delimiter={","}
                              label={"ตำบล"}
                              name={field.name}
                              value={field.value}
                              setValue={setValue}
                            />
                          );
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Controller
                        name="district"
                        control={control}
                        render={({ field }) => {
                          return (
                            <SelectThaiAddress
                              delimiter={","}
                              label={"อำเภอ"}
                              name={field.name}
                              value={field.value}
                              setValue={setValue}
                            />
                          );
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Controller
                        name="province"
                        control={control}
                        render={({ field }) => {
                          return (
                            <SelectThaiAddress
                              delimiter={","}
                              label={"จังหวัด"}
                              name={field.name}
                              value={field.value}
                              setValue={setValue}
                            />
                          );
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Controller
                        name="zipcode"
                        control={control}
                        render={({ field }) => {
                          return (
                            <SelectThaiAddress
                              delimiter={","}
                              label={"รหัสไปรษณีย์"}
                              name={field.name}
                              value={field.value}
                              setValue={setValue}
                            />
                          );
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} md={4} item>
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    ADDITIONAL DETAILS
                  </Typography>
                  <Grid container spacing={1} my={1}>
                    <Grid xs={12} item>
                      <Controller
                        name="remark"
                        control={control}
                        render={({ field }) => (
                          <TextField size="small" label="Remark" fullWidth {...field} rows={11.4} multiline />
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Typography variant="h6" sx={{ mt: 2, textTransform: "uppercase" }}>
                    TAGS
                  </Typography>
                  <Grid container spacing={1} my={1}>
                    <Grid xs={12} item>
                      <Controller
                        name="tags"
                        control={control}
                        render={({ field }) => {
                          return (
                            <Autocomplete
                              size="small"
                              multiple
                              value={field.value}
                              onChange={(event, newValue) => {
                                if (typeof newValue === "string") {
                                  field.onChange({ name: newValue });
                                } else if (newValue && newValue.inputValue) {
                                  // Create a new value from the user input
                                  field.onChange({ name: newValue.inputValue });
                                } else {
                                  field.onChange(newValue);
                                }
                              }}
                              filterOptions={(options, params) => {
                                const filtered = filter(options, params);
                                const { inputValue } = params;
                                // Suggest the creation of a new value
                                const isExisting = options.some((option) => inputValue === option.name);
                                if (inputValue !== "" && !isExisting) {
                                  filtered.push({
                                    inputValue,
                                    name: `Add "${inputValue}"`,
                                  });
                                }

                                return filtered;
                              }}
                              selectOnFocus
                              clearOnBlur
                              handleHomeEndKeys
                              options={optionTag}
                              getOptionLabel={(option) => {
                                // Value selected with enter, right from the input
                                if (typeof option === "string") {
                                  return option;
                                }
                                // Add "xxx" option created dynamically
                                if (option.inputValue) {
                                  return option.inputValue;
                                }
                                // Regular option
                                return option.name;
                              }}
                              renderOption={(props, option) => <li {...props}>{option.name}</li>}
                              freeSolo
                              renderInput={(params) => <TextField label="Tags" fullWidth {...params} />}
                            />
                          );
                        }}
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
                      <Controller
                        name="avatar"
                        control={control}
                        render={({ field }) => <AvatarUpload width={64} height={64} field={field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Name" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="title"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Title" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Email" fullWidth {...field} />}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => <TextField size="small" label="Phone" fullWidth {...field} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box px={2}>
              {mode === "edit" && (
                <Grid container spacing={2} mt={1} mb={2}>
                  <Grid xs={12} sm={6} md={4} item>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                      Save
                    </Button>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} item>
                    <Button
                      variant="contained"
                      color="inherit"
                      fullWidth
                      onClick={() => (mode === "add" ? navigate("/contacts") : navigate(`/contacts/${contactId}`))}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Form>
        </Await>
      </Suspense>
    </>
  );
};

export default EditContact;
