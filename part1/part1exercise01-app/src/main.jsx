import ReactDOM, { createRoot } from 'react-dom/client'
import { App } from './App'
import { MatOperation } from './App'
import React from 'react'
//import React from 'react'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <App />
   </React.StrictMode>
)

createRoot(document.getElementById('operation')).render(
  <StrictMode>
    <MatOperation />
  </StrictMode>
)

/*import ReactDOM from 'react-dom/client'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root').render(<App />),)
*/
/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/