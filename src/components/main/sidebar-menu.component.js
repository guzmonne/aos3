import React from 'react'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import Work from 'material-ui/svg-icons/action/work'

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px'
  }
}

const SidebarMenu = () =>
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Ordenes de Servicio" leftIcon={<Work />} />
        <MenuItem primaryText="Reparaciones" leftIcon={<Work />} />
        <MenuItem primaryText="Clientes" leftIcon={<Work />} />
        <Divider />
        <MenuItem primaryText="Configuración" />
        <MenuItem primaryText="Cuenta" />
      </Menu>
    </Paper>
  </div>

export default SidebarMenu
