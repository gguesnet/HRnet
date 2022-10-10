import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const data = JSON.parse(window.localStorage.getItem("user")) || undefined;
const columns = [
  { field: "firstname", headerName: "First name", width: 100 },
  { field: "lastname", headerName: "Last name", width: 100 },
  { field: "startdate", headerName: "Start date", width: 100 },
  { field: "department", headerName: "Department", width: 100 },
  { field: "birthdate", headerName: "Birth Date", width: 100 },
  { field: "street", headerName: "Last name", width: 100 },
  { field: "city", headerName: "City", width: 100 },
  { field: "zipcode", headerName: "Zipcode", width: 100 },
];

const rows = [...data];

function Table() {
  return (
    <div className="App">
      <div className="container">
        <h2>Current Employees</h2>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Table;
