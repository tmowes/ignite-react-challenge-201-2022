import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartProvider } from './contexts/CartProvider'
import { AppRoutes } from './routes/app.routes'
import GlobalStyles from './styles/GlobalStyles'
import * as themes from './styles/themes'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <BrowserRouter>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
