import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   padding: 40px 0;
   overflow: auto;
`

export const StyledCalendar = styled.div`
   .rbc-calendar {
      border: none;
   }

   .rbc-event {
      background-color: #3174ad;
      color: white;
      border-radius: 4px;
      padding: 2px 5px;
   }

   .rbc-day-slot .rbc-time-slot {
      border: none;
   }

   .rbc-row-content {
      display: none;
   }

   .rbc-time-view-resources .rbc-header,
   .rbc-time-view-resources .rbc-day-bg {
      padding: 10px 0;
   }

   .rbc-time-column .rbc-timeslot-group {
      border-top: none;
   }

   .rbc-time-header-content .rbc-row.rbc-row-resource {
      border-bottom: none;
   }
   
   .rbc-time-content {
      border: none;
   }

   .rbc-time-view .rbc-allday-cell {
      border: none;
   }
`
