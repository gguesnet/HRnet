import { Link } from "react-router-dom";

function Form() {
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
      storage.push(data);
      window.localStorage.setItem("user", JSON.stringify(storage));
    }

    e.target.reset();
  }

  return (
    <div className="container">
      <Link to="/employee">View Current Employees</Link>
      <h2>Create Employee</h2>

      <form action="#" id="create-employee" onSubmit={handleOnSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" name="firstname" type="text" required />

        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" name="lastname" type="text" required />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" name="birthdate" type="date" required />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" name="startdate" type="date" required />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" name="street" type="text" required />

          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" required />

          <label htmlFor="state">State</label>
          <select id="state" name="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            name="zipcode"
            type="text"
            pattern="[0-9]*"
            required
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" name="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Form;
