import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface IProps {
  holder: string;
  keyValue: string;
}

export default function BasicDatePicker({ holder }: IProps) {
  const [focused, setFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ outline: "none", overflow: "hidden", width: "100%" }}
      >
        <DatePicker
          sx={{
            width: "auto",
            paddingTop: 0,
            overflow: "hidden",
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              { borderColor: "#8dd3bb", borderWidth: "2px" },
            borderRadius: "8px",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#8dd3bb",
              borderRadius: "8px",
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#8dd3bb",
            },
          }}
          label={focused || selectedDate !== null ? "" : holder}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    </LocalizationProvider>
  );
}
