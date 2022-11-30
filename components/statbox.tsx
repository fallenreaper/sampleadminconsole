import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../utilities/theme";
import ProgressCircle from "./progresscircle";

function StatBox({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: {
  title: string;
  subtitle: string;
  icon: any;
  progress: string;
  increase: string;
}) {
  let _progress = 0;
  try {
    _progress = parseFloat(progress);
  } catch (e) {
    console.log("Failed to Parse `progress` to number.  Defaulting to `0`");
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = _progress * 360;

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ colors: colors.grey[900] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={_progress} />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{
              color: colors.greenAccent[400],
            }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;
