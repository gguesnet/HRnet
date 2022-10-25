import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

function DateInput({ label, name }) {
  const [dateValue, setDateValue] = useState(dayjs());

  const handleChangeDatePicker = (newValue) => {
    setDateValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
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

export default DateInput;
