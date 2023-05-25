import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BoxHeader from "../../components/BoxHeader";
import FilterlistBox from "../../components/FilterBox";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { getUserList } from "../../services/users";

const Users = () => {
  const { t } = useTranslation();
  const [userList, setUserList] = useState();
  const [active, setActive] = useState();
  const fetchUserList = async () => {
    const { users } = await getUserList();
    setUserList(users);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <Box sx={{ height: 1080, overflow: "auto" }}>
      <FilterlistBox noFilter={true} />
      <BoxHeader
        title={t("pages.setting.users.title")}
        CreateFnc={() => {
          const newItem = {
            id: 0,
            firstName: "",
            email: "",
          };
          userList.unshift(newItem);
          setUserList(userList);
          setActive(newItem);
          setTimeout(() => {
            document.getElementById(`id-${0}`).focus();
          }, 1);
        }}
      />
      <Grid p={1} container spacing={1}>
        {userList &&
          userList.map((item, index) => (
            <Grid key={index} xs={12} sm={4} item>
              <Card>
                <CardHeader
                  sx={{ p: 1 }}
                  avatar={<Avatar sx={{ ml: 2 }} src={item.image} />}
                  action={
                    <Box pt={1} mr={2}>
                      {active?.id === item.id ? (
                        <>
                          <IconButton onClick={() => setActive()}>
                            <Icon color={"primary"}>save</Icon>
                          </IconButton>
                          <IconButton onClick={() => setActive()}>
                            <Icon>close</Icon>
                          </IconButton>
                        </>
                      ) : (
                        <>
                          <IconButton
                            onClick={() => {
                              setActive(item);
                              setTimeout(() => {
                                document.getElementById(`id-${item.id}`).focus();
                              }, 1);
                            }}
                          >
                            <Icon color={"primary"}>edit</Icon>
                          </IconButton>
                          <IconButton onClick={() => console.log(index)}>
                            <Icon>delete</Icon>
                          </IconButton>
                        </>
                      )}
                    </Box>
                  }
                  // title={item.firstName}
                  // subheader={item.address.address}
                />
                <CardContent>
                  <TextField
                    sx={{ mb: 2 }}
                    id={`id-${item.id}`}
                    label="Name"
                    value={item.firstName}
                    size="small"
                    variant="outlined"
                    fullWidth
                    disabled={active?.id === item.id ? false : true}
                  />
                  <TextField
                    sx={{ mb: 2 }}
                    label="Email"
                    value={item.email}
                    size="small"
                    variant="outlined"
                    fullWidth
                    disabled={active?.id === item.id ? false : true}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={"Administrator"}
                      label="Role"
                      size="small"
                      disabled={active?.id === item.id ? false : true}
                      //onChange={handleChange}
                    >
                      <MenuItem value={"Administrator"}>Administrator</MenuItem>
                      <MenuItem value={"Manager"}>Manager</MenuItem>
                      <MenuItem value={"Staff"}>Staff</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Users;
