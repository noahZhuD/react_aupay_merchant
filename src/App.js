import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '@/Pages/Login'
import LayoutWrap from '@/Pages/Layout'
import Error from '@/Pages/404'
import PrivateRouter from '@/Router/privateRouter'
import { Provider } from 'react-redux'
import Stroe from '@/Redux/store'

export default class Home extends Component {
  render() {
    return (
      <Provider store={Stroe}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={ Login }></Route>
            <PrivateRouter component={ LayoutWrap } path='/' />
            <Route path="*" component={ Error }></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

