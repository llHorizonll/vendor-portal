import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  searchAddressByDistrict,
  searchAddressByAmphoe,
  searchAddressByProvince,
  searchAddressByZipcode,
} from "thai-address-database";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

export default function SelectThaiAddress({ delimiter, label, name, value, setValue, disabled }) {
  const [inputValue, setInputValue] = useState(value);
  const finder = (searchBy, txt) => {
    switch (searchBy) {
      case "subdistrict":
        return searchAddressByDistrict(txt).slice(0, 10);
      case "district":
        return searchAddressByAmphoe(txt).slice(0, 10);
      case "province":
        return searchAddressByProvince(txt).slice(0, 10);
      case "zipcode":
        return searchAddressByZipcode(txt).slice(0, 10);
      default:
        return [];
    }
  };

  const handleSearch = (inputValue) => {
    const foundData = finder(name, inputValue);
    const mapArray = foundData.map((item, key) => {
      return {
        key: `${item.zipcode}${key}`,
        title: `${item.district}${delimiter}${item.amphoe}${delimiter}${item.province}${delimiter}${item.zipcode}`,
        optionLabel: item.district,
      };
    });
    return mapArray;
  };

  const handleSelect = (value) => {
    if (value) {
      const addresses = value?.split(delimiter);
      setValue("subdistrict", addresses[0]);
      setValue("district", addresses[1]);
      setValue("province", addresses[2]);
      setValue("zipcode", addresses[3]);
    }
  };

  return (
    <Autocomplete
      size="small"
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option.optionLabel || value}
      options={[]}
      value={value}
      onChange={(_, newValue) => {
        handleSelect(newValue?.title);
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.title}
        </Box>
      )}
      renderInput={(params) => {
        return <TextField {...params} label={label} />;
      }}
      filterOptions={(_, { inputValue }) => handleSearch(inputValue)}
      disabled={disabled}
    />
  );
}

SelectThaiAddress.propTypes = {
  delimiter: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
};
