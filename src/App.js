import { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routers from '@/Router'
export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            routers.map((router, index) => {
              return (
                <Route
                  exact={ router.exact }
                  key={ index }
                  path={ router.path }
                  render={ props => {
                    return (
                      <div>
                        <router.component { ...props }>
                          {
                            router.children?.map((item, itemI) => {
                              return (
                                <Route key={ itemI } exact={ item.exact } path={ item.path } component={ item.component } />
                              )
                            })
                          }
                          {/* 重定向的处理 */}
                          {
                            router.redirect ? <Redirect from={ router.redirect[0] } to={ router.redirect[1] }></Redirect> : null
                          }
                        </router.component>
                      </div>
                    )
                  } } />
              )
            })
          }
        </Switch>
      </BrowserRouter>
    )
  }
}

