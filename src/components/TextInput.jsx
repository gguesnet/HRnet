import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

function TextInput({ id, label, minlength, maxlength, name, type }) {
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
          type={type}
          variant="outlined"
        />
      </FormControl>
    </Box>
  );
}

export default TextInput;
