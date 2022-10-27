import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { store } from "../redux";

const columns = [
  { field: "firstname", headerName: "First name", width: 100 },
  { field: "lastname", headerName: "Last name", width: 100 },
  { field: "startdate", headerName: "Start date", width: 100 },
  { field: "department", headerName: "Department", width: 100 },
  { field: "birthdate", headerName: "Birth Date", width: 100 },
  { field: "street", headerName: "Street", width: 100 },
  { field: "city", headerName: "City", width: 100 },
  { field: "state", headerName: "State", width: 100 },
  { field: "zipcode", headerName: "Zipcode", width: 100 },
];

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pt: 0.7,
        pb: 0,
        float: "right",
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

function Table() {
  const data = store.getState().employeeDataHandler.employeeList;
  console.log(data);

  if (!data) {
    return (
      <div className="App">
        <div className="container">
          <h2>The table is empty</h2>
          <Link to="/">Get Back Home →</Link>
        </div>
      </div>
    );
  }

  const [pageSize, setPageSize] = useState(5);
  console.log(data);

  return (
    <div className="App">
      <div className="container">
        <h2>Current Employees</h2>
        <div
          className="fade"
          style={{
            height: 400,
            width: "100%",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <DataGrid
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            rows={data}
            columns={columns}
            components={{ Toolbar: QuickSearchToolbar }}
          />
        </div>
        <Link to="/">Get Back Home →</Link>
      </div>
    </div>
  );
}

export default Table;
