import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import { states } from "../helpers";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "white",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

function Form() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [birthValue, setBirthValue] = useState(dayjs());
  const [startValue, setStartValue] = useState(dayjs());

  const handleChangeBirthPicker = (newValue) => {
    setBirthValue(newValue);
  };

  const handleChangeStartPicker = (newValue) => {
    setStartValue(newValue);
  };

  const [stateName, setStateName] = useState(states[0]);

  const handleChange = (e) => {
    setStateName(e.target.value);
  };

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

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date of Birth"
              inputFormat="MM/DD/YYYY"
              value={birthValue}
              name="birthdate"
              onChange={handleChangeBirthPicker}
              renderInput={(params) => (
                <TextField {...params} name="birthdate" />
              )}
            />
          </Stack>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/DD/YYYY"
              value={startValue}
              name="startdate"
              onChange={handleChangeStartPicker}
              renderInput={(params) => (
                <TextField {...params} name="startdate" />
              )}
            />
          </Stack>
        </LocalizationProvider>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" name="street" type="text" required />

          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" required />

          <Box>
            <FormControl fullWidth>
              <InputLabel id="select-label">State</InputLabel>
              <Select
                labelId="select-label"
                id="demo-simple-select"
                label="State"
                name="state"
                value={stateName}
                onChange={handleChange}
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

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
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Employee Created!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Form;
