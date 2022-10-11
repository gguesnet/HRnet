import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "black",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

function Form() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

    handleOpen();
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Employee Created!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Form;
