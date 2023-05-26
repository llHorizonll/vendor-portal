import { useTranslation } from "react-i18next";
import BoxHeader from "../../components/BoxHeader";
import FilterlistBox from "../../components/FilterBox";
import { Box, Button, Grid, TextField } from "@mui/material";
import AvatarUpload from "../../components/AvatarUpload";
import { useForm, Controller } from "react-hook-form";
import SelectThaiAddress from "../../components/SelectThaiAddress";

const CompanyProfile = () => {
  const { t } = useTranslation();
  const methods = useForm({
    defaultValues: {
      image: {},
      name: "",
      subdistrict: "",
      district: "",
      province: "",
      zipcode: "",
      birthday: {
        date: "",
        month: "",
        year: "",
      },
      select: {},
    },
  });

  const { control, setValue, handleSubmit } = methods;

  const onSubmit = (formData) => console.log(formData);

  return (
    <Box sx={{ height: 1080, overflow: "auto" }}>
      <FilterlistBox noFilter={true} />
      <BoxHeader title={t("pages.setting.company.title")} noButton={true} />
      <AvatarUpload />
      <Box p={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid xs={12} item>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField size="small" label="Name" fullWidth disabled {...field} />}
              />
            </Grid>
            <Grid xs={12} item>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField size="small" label="Address #1" fullWidth disabled {...field} />}
              />
            </Grid>
            <Grid xs={12} item>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField size="small" label="Address #2" fullWidth disabled {...field} />}
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
                    />
                  );
                }}
              />
            </Grid>

            <Grid xs={12} item>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CompanyProfile;
