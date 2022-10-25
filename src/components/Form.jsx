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
      <Link to="/employee">View Current Employees</Link>
      <h2>Create Employee</h2>

      <form action="#" id="create-employee" onSubmit={handleOnSubmit}>
        <TextInput
          id="firstname"
          label="First Name"
          minlength={1}
          maxlength={17}
          name="firstname"
          type="text"
        />

        <TextInput
          id="lastname"
          label="Last Name"
          minlength={1}
          maxlength={17}
          name="lastname"
          type="text"
        />

        <DateInput label="Date of Birth" name="birthdate" />

        <DateInput label="Start Date" name="startdate" />

        <fieldset>
          <legend>Address</legend>

          <TextInput
            id="street"
            label="Street"
            minlength={1}
            maxlength={17}
            name="street"
            type="text"
          />

          <TextInput
            id="city"
            label="City"
            minlength={1}
            maxlength={17}
            name="city"
            type="text"
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
            type="text"
          />
        </fieldset>

        <SelectInput
          id="select-department"
          label="Department"
          name="department"
          data={departments}
        />

        <button type="submit">Save</button>

        <SuccessModal isVisible={isVisible} toggle={toggle} />
      </form>
    </div>
  );
}

export default Form;
