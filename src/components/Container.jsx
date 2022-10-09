import { Link } from "react-router-dom";
import Form from "./Form";

function Container() {
  return (
    <div className="container">
      <Link to="/employee">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
    </div>
  );
}

export default Container;
