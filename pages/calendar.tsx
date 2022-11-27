import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";

//plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../utilities/theme";
import Header from "../components/header";
import { EventApi } from "@fullcalendar/common";

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleDateClick = (selected: any) => {
    const title = prompt("Enter the Title for your new Event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Where Organization Happens" />
      <Box display="flex" justifyContent="space-between">
        {/* Calendar Area */}
        <Box
          flex="1 1 20%"
          sx={{
            backgroundColor: colors.primary[600],
          }}
          p="15px"
          borderRadius="4px"
        >
          {/* Calendar Sidebar */}
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: EventApi) => {
              return (
                <ListItem
                  id={event.id || event._def.publicId}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    m: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {event.start &&
                          formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                      </Typography>
                    } //End Secondary Tag
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box flex="1 1 100%">
          {/* Main Calendar Area */}
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",  // Spaces have meaning.
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",  // Cant have spaces
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => {
              setCurrentEvents(events);
            }}
            initialEvents={[
              {
                id: "1234",
                title: "Fuck",
                date: "2022-11-23",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}
