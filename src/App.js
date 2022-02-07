import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '@/Pages/Login'
import Error from '@/Pages/404'
import PrivateRouter from '@/Router/privateRouter'

export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ Login }></Route>
          <PrivateRouter />
          <Route path="*" component={ Error }></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

