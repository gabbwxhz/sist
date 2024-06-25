/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Container, StyledCalendar } from './CalendarScheduleStyles'

moment.locale('pt-br')

const localizer = momentLocalizer(moment)

export default function CalendarSchedule(props) {
   const events = [
      {
         title: 'evento teste',
         start: moment().toDate(),
         end: moment().add(60, 'minute').toDate(),
         resource: 1
      }
   ]

   const resources = [
      {
         id: 1,
         title: 'funcionaria 1'
      },
      {
         id: 2,
         title: 'funcionaria 2'
      }
   ]

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
            />
         </StyledCalendar>
      </Container>
   )
}
