import React from 'react'
import ReactDOM from 'react-dom'
import Deck from './Deck'

import './index.css'

ReactDOM.render((<div>
  <h1><a href='mailto:konsumer@jetboystudio.com'>David Konsumer</a>'s Shiftwise Exercise</h1>
  <p>You can a zip of it <a href='https://github.com/konsumer/shiftwise-cards-react/archive/master.zip'>here</a>, and browse the code on <a href='https://github.com/konsumer/shiftwise-cards-react'>github</a>.</p>
  <Deck />
</div>), document.getElementById('app'))

