import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function OptionsInput() {
  return (
    <Autocomplete
      disablePortal
      options={countries}
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          { borderColor: "#8dd3bb", borderRadius: "8px", borderWidth: "1px" },
        borderRadius: "8px",
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#79747e",
          borderRadius: "8px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#79747e",
          borderRadius: "8px",
        },
      }}
      renderInput={(params) => <TextField {...params} label="From-To" />}
    />
  );
}

const countries = [
  { label: "Azerbaijan" },
  { label: "Italy" },
  { label: "Germany" },
];
