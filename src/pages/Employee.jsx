import { useDispatch } from "react-redux";
import { addEmployee } from "../redux";
import Title from "../components/Title";
import Table from "../components/Table";

function Employee() {
  const dispatch = useDispatch();
  const storage = JSON.parse(window.localStorage.getItem("user"));

  dispatch(addEmployee({ employeeList: storage }));

  return (
    <div className="App">
      <Title title="HRnet" />
      <Table />
    </div>
  );
}

export default Employee;
