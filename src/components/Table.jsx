import { Link } from "react-router-dom";

function Table() {
  const data = JSON.parse(window.localStorage.getItem("user")) || undefined;
  return (
    <div className="App">
      <div className="container">
        <h2>Current Employees</h2>
        <table id="employee-table" className="display">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody id="push">
            {data ? (
              data.map((item) => (
                <tr>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.startdate}</td>
                  <td>{item.department}</td>
                  <td>{item.birthdate}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zipcode}</td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Table;
