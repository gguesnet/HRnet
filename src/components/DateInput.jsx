import PropTypes from "prop-types";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

/**
 * @param {String} label - The label of the Select Input
 * @param {String} name - The name of the Select Input
 * @component
 */

function DateInput({ label, name }) {
  const [dateValue, setDateValue] = useState(dayjs());

  const handleChangeDatePicker = (newValue) => {
    setDateValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          fullwidth
          label={label}
          inputFormat="MM/DD/YYYY"
          value={dateValue}
          name={name}
          onChange={handleChangeDatePicker}
          renderInput={(params) => <TextField {...params} name={name} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

DateInput.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DateInput;
