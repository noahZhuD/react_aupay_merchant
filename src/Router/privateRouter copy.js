import { Route, Redirect } from 'react-router-dom';
import routers from '@/Router'
import { getToken } from '@/Utils/token.js'

const privateRouter = () => {
  return (
      routers.map((router, index) => {
        return (
          <Route
            exact={ router.exact }
            key={ index }
            path={ router.path }
            render={ props => {
              return (
                getToken() ? <div>
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
                </div> : <Redirect to="/Login" />
              )
            } } />
        )
      })
  )
}
export default privateRouter