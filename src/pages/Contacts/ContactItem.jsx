/* eslint-disable react-refresh/only-export-components */
import { Suspense, useState } from "react";
import { useLoaderData, Await } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToggleButton, ToggleButtonGroup, Icon, Grid, TextField, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import BoxHeader from "../../components/BoxHeader";
import SelectThaiAddress from "../../components/SelectThaiAddress";

const ContactItem = () => {
  const { contact } = useLoaderData();
  const { t } = useTranslation();
  const [mode, setMode] = useState();
  const handleMode = (_, mode) => {
    if (mode === "save" || mode === "cancel") {
      setMode();
    } else {
      setMode(mode);
    }
  };
  const methods = useForm({
    defaultValues: {
      image: {},
      name: "",
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
    },
  });

  const { control, setValue, handleSubmit } = methods;

  const onSubmit = (formData) => console.log(formData);

  const MuiButtonGroup = () => {
    if (mode && mode !== "delete") {
      return (
        <ToggleButtonGroup size="small" value={mode} exclusive onChange={handleMode} aria-label="text alignment">
          <ToggleButton value="save" aria-label="save">
            <Icon>save</Icon>
          </ToggleButton>
          <ToggleButton value="cancel" aria-label="cancel">
            <Icon>cancel</Icon>
          </ToggleButton>
        </ToggleButtonGroup>
      );
    }
    return (
      <ToggleButtonGroup size="small" value={mode} exclusive onChange={handleMode} aria-label="text alignment">
        <ToggleButton value="add" aria-label="add">
          <Icon>add</Icon>
        </ToggleButton>
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
    <div>
      <BoxHeader title={t("pages.contacts.title")} ButtonElement={MuiButtonGroup} />
      <Suspense fallback={<small>Loading Comments...</small>}>
        <Await resolve={contact}>
          <Box px={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                <Grid xs={12} md={4} item>
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    Information
                  </Typography>
                  <Grid container spacing={2} my={2}>
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
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    Address
                  </Typography>
                  <Grid container spacing={2} my={2}>
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
                  <Grid container spacing={2} my={2}>
                    <Grid xs={12} item>
                      <Controller
                        name="remark"
                        control={control}
                        render={({ field }) => (
                          <TextField size="small" label="Remark" fullWidth {...field} rows={13} multiline />
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    TAGS
                  </Typography>
                </Grid>
                <Grid xs={12} md={4} item>
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    Contact person
                  </Typography>
                  <Grid container spacing={2} my={2}>
                    <Grid xs={12} item>
                      <Controller
                        name="name"
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
            </form>
          </Box>
        </Await>
      </Suspense>
    </div>
  );
};

export default ContactItem;
