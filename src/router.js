import React from 'react'
import {Router as ReactRouter, Route, IndexRoute, browserHistory} from 'react-router'
import MainLayout from './components/main/layouts/index.layout.js'
import HelloWorld from './components/hello-world.component.js'

const Router = () =>
  <ReactRouter history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={HelloWorld} />
    </Route>
  </ReactRouter>

export default Router
