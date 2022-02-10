import { Component } from 'react';
import { Switch } from 'react-router-dom'

import PrivateRouter from '@/Router/privateRouter'

import PropertyOverview from '@/Pages/Property/overview'
import PropertyCurrencyAssets from '@/Pages/Property/currencyAssets'

export default class MainRouter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Switch>
        <PrivateRouter component={ PropertyOverview } path='/index/property/overview' />
        <PrivateRouter component={ PropertyCurrencyAssets } path='/index/property/currencyAssets' />
      </Switch>
    )
  }
}