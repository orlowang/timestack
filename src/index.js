import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { theme } from './config'
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme.light}>
    <App />
  </ThemeProvider>,
  document.getElementById('ReactMountRoot')
)
registerServiceWorker()
