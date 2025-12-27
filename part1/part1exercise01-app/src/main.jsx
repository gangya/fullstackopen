import ReactDOM, { createRoot } from 'react-dom/client'
import { App, LeftRightClicks } from './App'
import React from 'react'
import { StrictMode } from 'react'

console.log('program started...')

createRoot(document.getElementById('root')).render( 
<StrictMode>
  <App />
</StrictMode> )

createRoot(document.getElementById('handleclicks')).render(
  <StrictMode>
    <LeftRightClicks />
  </StrictMode>
)

/* ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <CardApp />
   </React.StrictMode>
) */

/* createRoot(document.getElementById('operation')).render(
  <StrictMode>
    <MatOperation />
  </StrictMode>
) */

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