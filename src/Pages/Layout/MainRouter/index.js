import { Component } from 'react';
import { Switch } from 'react-router-dom'

import PrivateRouter from '@/Router/privateRouter'
import routerAry from './routerAry'

export default class MainRouter extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return(
      <Switch>
        {
          routerAry.map(item => {
            return <PrivateRouter component={ item.component } path={ item.path }  key={item.path} />
          })
        }
      </Switch>
    )
  }
}