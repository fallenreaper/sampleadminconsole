import { Box } from "@mui/material";
import Header from "../components/header";
import GeographyChart from "../components/geography";


const Geography = () => {

  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography