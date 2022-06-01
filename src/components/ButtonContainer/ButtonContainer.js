import { Button } from "@mui/material";

export default function ButtonContainer({
  text = "",
  sx = {},
  handleClick = () => {},
  ...rest
}) {
  return (
    <Button
      onClick={handleClick}
      sx={{
        ...sx,
        lineHeight: "initial",
      }}
      {...rest}
    >
      {text}
    </Button>
  );
}
