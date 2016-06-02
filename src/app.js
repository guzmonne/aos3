// Require scss files
require('./styles/main.scss')

import React from 'react'
import ReactDOM from 'react-dom'

// Material UI Init
import injectTapEventPlugin from 'react-tap-event-plugin'

import HelloWorld from './components/hello-world.component.js'

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(<HelloWorld />, document.getElementById('root'))