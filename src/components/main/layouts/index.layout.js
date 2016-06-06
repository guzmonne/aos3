import React from 'react'
import MuiTheme from '../mui-theme-provider.component.js'
import AppBar from '../appbar.component.js'
import SidebarMenu from '../sidebar-menu.component.js'

export const IndexLayout = ({children}) =>
  <MuiTheme>
    <div className="MainApp">
      <div className="NavigationBar">
        <AppBar />
      </div>
      <div className="MainContent">
        <div className="row">
          <div className="col-sm-5 col-md-4 col-lg-3">
            <SidebarMenu />
          </div>
          <div className="col-sm-7 col-md-8 col-lg-9">
            {children}
          </div>
        </div>
      </div>
    </div>
  </MuiTheme>

IndexLayout.propTypes = {
  children: React.PropTypes.element
}

export default IndexLayout
