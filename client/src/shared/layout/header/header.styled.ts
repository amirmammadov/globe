import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const MyHeader = styled(Box)({
  paddingLeft: "5%",
  paddingRight: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const MyStack = styled(Stack)({
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 2,
});
