import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { columns } from "../helpers";

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
  const data = useSelector((state) => state.employeeDataHandler);

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
            rows={data.employeeList}
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
