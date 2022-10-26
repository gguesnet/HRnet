import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

/**
 * @param {Number} id - The ID of the Text Input
 * @param {String} label - The label of the Text Input
 * @param {Number} minlength - The minimum length of the Text Input
 * @param {Number} maxlength - The maximum length of the Text Input
 * @param {String} name - The name of the Text Input
 * @component
 */

function TextInput({ id, label, minlength, maxlength, name }) {
  return (
    <Box>
      <FormControl fullWidth>
        <TextField
          inputProps={{
            minLength: minlength,
            maxLength: maxlength,
          }}
          required
          id={id}
          label={label}
          name={name}
          type="text"
          variant="outlined"
        />
      </FormControl>
    </Box>
  );
}

TextInput.prototype = {
  id: PropTypes.number.isRequired,
  label: PropTypes.number.isRequired,
  minlength: PropTypes.number.isRequired,
  maxlength: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
