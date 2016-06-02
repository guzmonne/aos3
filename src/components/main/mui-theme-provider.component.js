import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default ({children}) => 
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {children}
  </MuiThemeProvider>