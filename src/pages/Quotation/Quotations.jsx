/* eslint-disable react-refresh/only-export-components */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
// import { useTranslation } from "react-i18next";
// import { useNavigate, useLoaderData } from "react-router-dom";
import {
  // Grid,
  // Card,
  // CardContent,
  // Chip,
  // Toolbar,
  // Stack,
  // TextField,
  // Typography,
  // Button, 
  Box,
} from "@mui/material";
import BoxHeader from "../../components/BoxHeader";
import { t } from "i18next";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

const Quotations = () => {

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //access nested data with dot notation
        header: "Quote #",
        size: 150,
      },
      {
        accessorKey: "lastName", //access nested data with dot notation
        header: "Revsion",
        size: 150,
      },
      {
        accessorKey: "address.address", //normal accessorKey
        header: "Attention",
      },
      {
        accessorKey: "address.address", //normal accessorKey
        header: "Company",
      },
      {
        accessorKey: "address.address", //normal accessorKey
        header: "Email",
      },

    ],
    []
  );

  return <>
    <BoxHeader title={t("pages.quotations.title")} />
    <Box>
      <MaterialReactTable
        columns={columns}
        data={"data"}
        state={{ isLoading: "" }}
        muiTableBodyRowProps={() => ({
          onClick: () => {
            // navigate(row.original.id.toString());
            // console.log(row);
          },
          sx: {
            cursor: "pointer",
          },
        })}
        enableDensityToggle
      />

    </Box>
  </>
};

export default Quotations;
