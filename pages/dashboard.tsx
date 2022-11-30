import { Box, Button, useTheme } from "@mui/material";
import Header from "../components/header";
import { mockTransactions } from "../mockData/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../components/line";
import BarChart from "../components/bar";
import GeographyChart from "../components/geography";
import StatBox from "../components/statbox";
import ProgressCircle from "../components/progresscircle";
import { tokens } from "../utilities/theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[300],
            color: colors.grey[900],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* Actual Dash */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoColumns="140px"
        gap="20px"
      >
        {/* Top Row Items */}
        <Box
          gridColumn="span 3"
          sx={{backgroundColor:colors.primary[600]}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
