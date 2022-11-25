import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../utilities/theme";

const Header = (data: { title: string; subtitle: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[900]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {data.title.toUpperCase()}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[600]}>
        {data.subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
