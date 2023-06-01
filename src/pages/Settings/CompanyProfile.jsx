import { useState } from "react";
import { useTranslation } from "react-i18next";
import BoxHeader from "../../components/BoxHeader";
import FilterlistBox from "../../components/FilterBox";
import { ToggleButton, ToggleButtonGroup, Icon, Grid, TextField, Box, Typography, Button, Avatar } from "@mui/material";
import AvatarUpload from "../../components/AvatarUpload";
import { useForm, Controller } from "react-hook-form";
import SelectThaiAddress from "../../components/SelectThaiAddress";
import FileUpload from "../../components/FileUpload";

const CompanyProfile = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState();

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

  const handleMode = (_, mode) => {
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
      </ToggleButtonGroup>
    );
  };

  return (
    <Box sx={{ height: 1080, overflow: "auto" }}>
      <FilterlistBox noFilter={true} />
      <BoxHeader title={t("pages.setting.company.title")} ButtonElement={MuiButtonGroup} />
      <Box p={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid xs={12} md={6} item>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  {!mode ? (
                    <Box display={"flex"} justifyContent={"center"}>
                      <Avatar sx={{ width: 128, height: 128 }} />
                    </Box>
                  ) : (
                    <Controller
                      name="image"
                      control={control}
                      render={({ field }) => <AvatarUpload width={128} height={128} field={field} />}
                    />
                  )}
                </Grid>
                <Grid xs={12} item>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField size="small" label="Name" fullWidth disabled={!mode} {...field} />
                    )}
                  />
                </Grid>
                <Grid xs={12} item>
                  <Controller
                    name="address1"
                    control={control}
                    render={({ field }) => <TextField size="small" label="Address #1" fullWidth disabled={!mode} {...field} />}
                  />
                </Grid>
                <Grid xs={12} item>
                  <Controller
                    name="address2"
                    control={control}
                    render={({ field }) => <TextField size="small" label="Address #2" fullWidth disabled={!mode} {...field} />}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
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
                          disabled={!mode}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
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
                          disabled={!mode}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
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
                          disabled={!mode}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
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
                          disabled={!mode}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
                  <Controller
                    name="branch"
                    control={control}
                    render={({ field }) => <TextField size="small" label="Branch1" fullWidth disabled={!mode} {...field} />}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
                  <Controller
                    name="businessId"
                    control={control}
                    render={({ field }) => <TextField size="small" label="Business ID" fullWidth disabled={!mode} {...field} />}
                  />
                </Grid>
                <Grid xs={12} md={12} item>
                  <Controller
                    name="taxId"
                    control={control}
                    render={({ field }) => <TextField size="small" label="TAX ID" fullWidth disabled={!mode} {...field} />}
                  />
                </Grid>
                <Grid xs={12} md={12} item>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField size="small" label="Email" fullWidth disabled={!mode} {...field} />}
                  />
                </Grid>
                <Grid xs={12} md={12} item>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <TextField size="small" label="Phone" fullWidth disabled={!mode} {...field} />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={6} item>
              <Typography variant="h6">Official Documents</Typography>
              {mode && <FileUpload limit={5} multiple name="doc" />}
            </Grid>
            {mode && (
              <>
                <Grid xs={12} sm={6} item>
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    Save
                  </Button>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Button variant="contained" color="inherit" fullWidth onClick={() => setMode()}>
                    Cancel
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CompanyProfile;
