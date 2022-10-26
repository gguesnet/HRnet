import { useState } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectInput({ id, label, name, data }) {
  const [selectData, setSelectData] = useState(data[0]);

  const handleChange = (e) => {
    setSelectData(e.target.value);
  };

  /**
   * @param {Number} id - The ID of the Select Input
   * @param {String} label - The label of the Select Input
   * @param {String} name - The name of the Select Input
   * @param {Array} data - The data of the Select Input
   * @component
   */

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

SelectInput.prototype = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default SelectInput;
