import React from 'react'
import MuiThemeProvider from './main/mui-theme-provider.component.js'
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

export default () => 
  <MuiThemeProvider class="Hello">
    <GridList>
      <h1>Hello, World! <RaisedButton label="lalala" /></h1>
    </GridList>
  </MuiThemeProvider>