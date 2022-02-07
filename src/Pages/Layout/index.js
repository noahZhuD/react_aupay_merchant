import { Component } from 'react'
import { Link } from 'react-router-dom'
import Sider from './Sider'
import './index.scss'
export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className='layout_w'>
          <Sider />
          <div className=''>
            <ul>
              <li>第一个</li>
              <li>第二个</li>
            </ul>
          </div>
        </div>
        <Link to='/index/home'>首页</Link>
        <Link to='/index/about'>关于我们</Link>
        { this.props.children }
      </div>
    )
  }
}