import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ChakraProvider } from '@chakra-ui/react'
import AppTheme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={AppTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)