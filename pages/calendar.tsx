import { useState } from "react";
import FullCalendar, {formatDate} from "@fullcalendar/react"

//plugins
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
import { EventApi } from "@fullcalendar/common";

export default function Calendar () {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [ currentEvents, setCurrentEvents] = useState<EventApi[]>([])
  // const setCurrentEvents = (events: any[]) => {_setCurrentEvents(events)}
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

  const handleEventClick = (selected: any) => {
    
  }


  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Where Organization Happens" />
      <Box>
        {/* Calendar Area */}
        <Box>
          {/* Calendar Sidebar */}
          <Box>
            <Typography variant="h5">
              Events
            </Typography>
            <List>
              {currentEvents.map( (event: EventApi) => {
                return (
                  <ListItem id={event.id}>
                    <ListItemText
                      primary={event.title}
                      secondary={
                        <Typography>
                        {
                          event.start && formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day:"numeric"
                          })
                        }
                      </Typography>
                      } //End Secondary Tag
                    />
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Box>
        <Box>
          {/* Main Calendar Area */}
          <FullCalendar
            height= "75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left:"prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={ (events) => setCurrentEvents(events) }
            initialEvents={
              []
            }

          />
        </Box>
      </Box>
    </Box>
  )
}