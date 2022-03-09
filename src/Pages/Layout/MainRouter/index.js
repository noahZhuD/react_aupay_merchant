import { Component } from 'react';
import { Switch } from 'react-router-dom'

import PrivateRouter from '@/Router/privateRouter'

// import PropertyOverview from '@/Pages/Property/overview'
// import PropertyCurrencyAssets from '@/Pages/Property/currencyAssets'

const routerFiles = require.context('@/Pages', true, /\.js$/)
const routerAry = []
routerFiles.keys().map(item => {
  if (item.includes('/404') || item.includes('/Layout') || item.includes('/Home') || item.includes('/Login')) return false
  let pathAry = item.split('/')
  let path = '/index/' + (pathAry.slice(1, pathAry.length - 1).join('/')).toLowerCase()
  let component = routerFiles(item).default
  console.log(component)
  routerAry.push({
    path,
    component
  })
  return true
})
console.log(routerAry, '/routerAry')

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