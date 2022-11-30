import { Box, Button, Typography, useTheme } from "@mui/material";
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
      {/* Standard Header/Subtitle */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>

      {/* Download Report Information Button */}
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

      {/* Actual Dash / Grid Design */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoColumns="140px"
        gap="20px"
      >
        {/* Top Row Items */}
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[600] }}
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
        <Box
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: colors.primary[600] }}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[600] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[600] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Second Row of Items */}
        <Box gridColumn="span 8" gridRow="span 2" sx={{backgroundColor: colors.primary[600]}}>
            <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h5" fontWeight="600" color={colors.grey[900]}>
                  Revenue Generated
                </Typography>
                <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[400]}>
                  $59,342.32
                </Typography>
              </Box> {/* [TODO] Continue Here for Dashboard creation. */}
            </Box>
        </Box>
      </Box>{/* End Of DashBox */}
    </Box>
  );
};

export default Dashboard;
