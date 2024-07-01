import { Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import theme from './global/theme'

import GlobalStyle from './global/GlobalStyles'
import Schedule from './pages/Schedule'

export default function App() {
   return (
      <>
         <ThemeProvider theme={theme}>
            <Routes>
               <Route path="/schedule" element={<Schedule />} />
            </Routes>
            <GlobalStyle />
         </ThemeProvider>
      </>
   )
}
