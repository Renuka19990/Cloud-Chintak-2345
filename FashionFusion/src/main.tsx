// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import store from './Redux/store.ts'
import { Provider } from'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <Provider store={store}><App /></Provider>
    
  </ChakraProvider>,
)
