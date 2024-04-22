import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
// import useTheme from "@mui/material";

import Header from "../../components/header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5,},
    { field: "registrarId", headerName: "Registarar Id" },
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
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      type: "String",
      align: "left",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      type: "String",
      align: "left",
      headerAlign: "left",
    },
  ];

  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="Members Contacts List" />
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
                rows={mockDataContacts} 
                columns={columns} 
                components={{Toolbar: GridToolbar}}
            />
        </Box>
    </Box>
  );
};

export default Contacts;