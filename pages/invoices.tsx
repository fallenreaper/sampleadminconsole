import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../utilities/theme";
import { mockDataInvoices } from "../mockData/mockData";
import Header from "../components/header";

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        console.log(typeof params, params);
        return (
          <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
          </Typography>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[700],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[300],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[300],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[900]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[800]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
}
