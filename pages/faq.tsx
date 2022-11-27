import { Box , useTheme, Typography} from "@mui/material"
import Header from "../components/header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined"
import { tokens } from "../utilities/theme"

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return(
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Sample Question A
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is some sample info 1
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Sample Question Afs
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is some sample info 1asdf
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Sample Question b
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is some sample info 3
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Sample Question c
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is some sample info 3
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            Sample Question d
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is some sample info 4
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default FAQ