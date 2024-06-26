/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Container, StyledCalendar } from './CalendarScheduleStyles'
import { useState } from 'react'

moment.locale('pt-br')

const localizer = momentLocalizer(moment)

export default function CalendarSchedule() {
   const [resourceId, setResourceId] = useState(null)

   const events = [
      {
         title: 'evento teste',
         start: moment().toDate(),
         end: moment().add(120, 'minute').toDate(),
         resourceId: resourceId
      }
   ]

   const resources = [
      {
         id: 1,
         title: 'gab'
      },
      {
         id: 2,
         title: 'gab'
      },
      {
         id: 3,
         title: 'gab'
      },
      {
         id: 4,
         title: 'gab'
      },
      {
         id: 5,
         title: 'gab'
      },
      {
         id: 6,
         title: 'gab'
      },
      {
         id: 7,
         title: 'gab'
      },
      {
         id: 8,
         title: 'gab'
      }
   ]

   const handleSelectResourceId = (resource) => {
      setResourceId(resource.resourceId)
   }

   return (
      <Container>
         <StyledCalendar>
            <Calendar
               localizer={localizer}
               culture="pt-BR"
               events={events} // eventos da agenda
               toolbar={false}
               style={{
                  width: '80vw'
               }}
               selectable
               popup
               defaultView="day"
               // horario de funcionamento
               min={moment().startOf('day').add(6, 'hours').toDate()}
               max={moment().startOf('day').add(22, 'hours').toDate()}
               resources={resources} // organizaçao das colunas
               formats={{
                  resourceHeaderFormat: ({ resource }) => resource.resourceTitle,
                  timeGutterFormat: 'HH:mm',
                  eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                     localizer.format(start, 'HH:mm', culture) +
                     ' - ' +
                     localizer.format(end, 'HH:mm', culture),
                  agendaTimeFormat: 'HH:mm'
               }}
               onSelectSlot={handleSelectResourceId}
            />
         </StyledCalendar>
      </Container>
   )
}
