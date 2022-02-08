import { Route, Redirect } from 'react-router-dom';
import { getToken } from '@/Utils/token.js'

const privateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route { ...rest } render = { props => {
      return (
        getToken() ? <Component { ...props } /> : <Redirect to="/login" />
      )
    }}>
    </Route>
  )
}
export default privateRouter