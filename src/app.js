// Require css libraries
require('../node_modules/flexboxgrid/dist/flexboxgrid.css')
// Require scss files
require('./styles/main.scss')

import React from 'react'
import ReactDOM from 'react-dom'

import Main from './main.js'

// ----------------
// Material UI Init
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
// ----------------

ReactDOM.render(<Main />, document.getElementById('root'))
