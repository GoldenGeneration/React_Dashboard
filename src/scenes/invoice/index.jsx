import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
// import useTheme from "@mui/material";

import Header from "../../components/header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5,},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
        field: "cost",
        headerName: "Cost",

        renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
                {params.value}
            </Typography>
        )
    
    },
    {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      type: "String",
      align: "left",
      headerAlign: "left",
    },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="Registered Invoic" />
        <Box
            m="30px 0 0 0"
            height="50vh"
            sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeader": {
                backgroundColor: colors.blueAccent[800],
                borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[800],
            },
            "& .MuiCheckbox-root": {
                border: "none",
                color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
                color: `${colors.grey[100]} !important`,
            },
            }}
        >
            <DataGrid 
                checkboxSelection 
                rows={mockDataInvoices} 
                columns={columns} 
                components={{Toolbar: GridToolbar}}
            />
        </Box>
    </Box>
  );
};

export default Contacts;