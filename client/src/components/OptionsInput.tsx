import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

interface IProps {
  options: { title: string }[];
  holder: string;
  keyValue: string;
}

const specialValuesOne = ["from", "depart", "passenger", "rooms"];
const specialValuesTwo = ["to", "return", "class", "guests"];

export default function OptionsInput({ options, holder, keyValue }: IProps) {
  return (
    <Autocomplete
      id="highlights-demo"
      classes={{
        popupIndicator: "custom-popup-indicator",
      }}
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          { borderColor: "#8dd3bb", borderWidth: "1.5px" },
        borderRadius: "8px",
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#79747e",
          borderRadius: "8px",
          borderTopRightRadius: `${specialValuesOne.includes(keyValue) && "0"}`,
          borderBottomRightRadius: `${
            specialValuesOne.includes(keyValue) && "0"
          }`,
          borderTopLeftRadius: `${specialValuesTwo.includes(keyValue) && "0"}`,
          borderBottomLeftRadius: `${
            specialValuesTwo.includes(keyValue) && "0"
          }`,
          borderRight: `${specialValuesOne.includes(keyValue) && "0"}`,
          borderLeft: `${specialValuesTwo.includes(keyValue) && "0"}`,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#79747e",
        },
      }}
      componentsProps={{
        paper: {
          sx: {
            borderRadius: "8px",
            marginTop: "10px",
          },
        },
      }}
      options={options}
      getOptionLabel={(option) => option.title}
      blurOnSelect={false}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            backgroundColor: "#fff",
            border: "none",
          }}
          label={holder}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, {
          insideWords: true,
        });
        const parts = parse(option.title, matches);

        return (
          <li
            {...props}
            style={{
              padding: "10px",
              fontSize: "15px",
              display: "block",
              marginLeft: "0",
            }}
          >
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}
