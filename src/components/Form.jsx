import { Link } from "react-router-dom";
import { useState } from "react";
import { states, departments } from "../helpers";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import SuccessModal from "./SuccessModal";

function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  const toggleValue = () => setValue((prevValue) => !prevValue);
  return [value, toggleValue];
}

function Form() {
  const [isVisible, toggle] = useToggle();

  async function handleOnSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const user = window.localStorage.getItem("user");
    let count;

    if (!user) {
      count = 1;
    } else {
      count = JSON.parse(user).length + 1;
    }

    const data = { id: count };

    console.log(count);

    form.forEach((item, i) => {
      console.log(item, i);
      let input = { [i]: item };
      Object.assign(data, input);
    });

    console.log(data);

    if (data) {
      const storage = JSON.parse(window.localStorage.getItem("user")) || [];
      console.log(storage);
      storage.push(data);
      window.localStorage.setItem("user", JSON.stringify(storage));
    }

    toggle();
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

        <SuccessModal isVisible={isVisible} toggle={toggle} />
      </form>
    </div>
  );
}

export default Form;
