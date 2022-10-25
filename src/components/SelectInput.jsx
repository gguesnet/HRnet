import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectInput({ id, label, name, data }) {
  const [selectData, setSelectData] = useState(data[0]);

  const handleChange = (e) => {
    setSelectData(e.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId="select-label"
          id={id}
          label={label}
          name={name}
          value={selectData}
          onChange={handleChange}
        >
          {data.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectInput;
