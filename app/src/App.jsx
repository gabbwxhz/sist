import { Routes, Route } from 'react-router-dom'

import GlobalStyle from './global/GlobalStyles'
import Schedule from './pages/Schedule'

export default function App() {
   return (
      <>
         <Routes>
            <Route path="/schedule" element={<Schedule />} />
         </Routes>
         <GlobalStyle />
      </>
   )
}
