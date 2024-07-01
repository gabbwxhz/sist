/* eslint-disable no-unused-vars */

import { useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'
import 'moment/locale/pt-br'

import EventModal from '../modals/event-modal/EventModal'

import { Container, StyledCalendar } from './CalendarScheduleStyles'

moment.locale('pt-br')

const localizer = momentLocalizer(moment)

export default function CalendarSchedule() {
   const [events, setEvents] = useState([])
   const [openModal, setOpenModal] = useState(false)

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const resources = [
      { id: 1, title: 'gab' },
      { id: 2, title: 'gab' },
      { id: 3, title: 'gab' },
      { id: 4, title: 'gab' },
      { id: 5, title: 'gab' },
      { id: 6, title: 'gab' },
      { id: 7, title: 'gab' },
      { id: 8, title: 'gab' }
   ]

   const handleSelectSlot = ({ start, end, resourceId }) => {
      const newEvent = {
         title: 'evento',
         start,
         end,
         resourceId
      }
      setEvents([...events, newEvent])
   }

   return (
      <Container>
         <StyledCalendar>
            <Calendar
               localizer={localizer}
               culture="pt-BR"
               events={events}
               style={{ width: '80vw' }}
               resources={resources}
               toolbar={false}
               onSelectSlot={handleSelectSlot}
               defaultView="day"
               selectable
               popup
               min={moment().startOf('day').add(6, 'hours').toDate()}
               max={moment().startOf('day').add(22, 'hours').toDate()}
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
