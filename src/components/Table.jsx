import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
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

function Table() {
  const data = store.getState().employeeDataHandler.employeeList;

  console.log(data);

  const rows = data;

  return (
    <div className="App">
      <div className="container">
        <h2>Current Employees</h2>
        <div
          style={{
            height: 400,
            width: "100%",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={30}
            rowsPerPageOptions={[30]}
          />
        </div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Table;
