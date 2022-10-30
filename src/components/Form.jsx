import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../redux";
import { states, departments } from "../helpers";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import SuccessModal from "modal-oc-project-hrnet";

function Form() {
  const [modalShowing, setModalShowing] = useState(false);

  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.employeeDataHandler);

  function handleClick() {
    setModalShowing(!modalShowing);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const user = stateData.employeeList;

    let count;

    if (user.length === 0) {
      count = 1;
    } else {
      count = user.length + 1;
    }

    let data = { id: count };

    form.forEach((item, i) => {
      let input = { [i]: item };
      Object.assign(data, input);
    });

    const array = [...user, data];

    if (data) {
      dispatch(addEmployee({ employeeList: array }));
    }

    handleClick();
    e.target.reset();
  }

  return (
    <div className="container">
      <Link to="/employee">View Current Employees →</Link>
      <h2>Create Employee</h2>

      <form action="#" id="create-employee" onSubmit={handleOnSubmit}>
        <div className="responsive-item">
          <fieldset className="info-fieldset">
            <legend>Information</legend>
            <TextInput
              id="firstname"
              label="First Name"
              minlength={1}
              maxlength={17}
              name="firstname"
            />

            <TextInput
              id="lastname"
              label="Last Name"
              minlength={1}
              maxlength={17}
              name="lastname"
            />

            <DateInput label="Date of Birth" name="birthdate" />

            <DateInput label="Start Date" name="startdate" />
          </fieldset>

          <fieldset className="address-fieldset">
            <legend>Address</legend>

            <TextInput
              id="street"
              label="Street"
              minlength={1}
              maxlength={17}
              name="street"
            />

            <TextInput
              id="city"
              label="City"
              minlength={1}
              maxlength={17}
              name="city"
            />

            <SelectInput
              id="select-state"
              label="State"
              name="state"
              data={states}
            />

            <TextInput
              id="zipcode"
              label="Zip Code"
              minlength={5}
              maxlength={5}
              name="zipcode"
            />
          </fieldset>
        </div>

        <SelectInput
          id="select-department"
          label="Department"
          name="department"
          data={departments}
        />

        <button type="submit" className="save">
          Save
        </button>

        <SuccessModal
          title="Success!"
          text="Employee has been successfully added!"
          button="Okay!"
          toggleOpen={handleClick}
          isOpen={modalShowing}
        />
      </form>
    </div>
  );
}

export default Form;
