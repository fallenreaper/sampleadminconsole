import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography, 
  useTheme
} from "@mui/material"
import { tokens } from "../utilities/theme";
import Header from "../components/header";

export const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [ currentEvents, setCurrentEvents] = useState([])
  const handleDateClick = (selected: any) => {
    const title = prompt("Enter the Title for your new Event")
    const calendarApi = selected.view.calendar;
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        state: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Where Organization Happens" />
      <Box>
        {/* Calendar Area */}
        <Box>
          {/* Calendar Sidebar */}
        </Box>
        <Box>
          {/* Main Calendar Area */}
        </Box>
      </Box>
    </Box>
  )
}