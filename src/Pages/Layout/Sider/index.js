import { Menu } from 'antd';
import { Component } from 'react'
import routers from '@/Router/index.js'
import { Link, withRouter } from 'react-router-dom'

class SiderMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultOpenKeys: [],
      defaultSelectedKeys: [],
      collapsed: false
    }
  }
  componentWillMount() {
    const pathName = this.props.location.pathname
    const openName = pathName.split('/').splice(0, pathName.split('/').length -1).join('/')
    this.setState({
      defaultOpenKeys: openName,
      defaultSelectedKeys: [pathName]
    })
  }
  componentDidUpdate(props) {
    // console.log(props, 'ppp')
    // this.setState({
    //   collapsed: props.collapsed
    // })
  }
  handleClick = e => {
    this.setState({
      defaultSelectedKeys: [e.key]
    })
  };
  clickMenuTit = e => {
    this.setState({
      defaultOpenKeys: [e.key],
    })
  }
  // 无子级
  menuItem = (item) => {
    return <Menu.Item key={ item.path }><Link to={ item.path }>{ item.meta.title }</Link></Menu.Item>
  }
  // 有子级
  menuSubItem = (item) => {
    return (
      <Menu.SubMenu onTitleClick={ this.clickMenuTit } key={ item.path } title={ item.meta.title }>
        {
          item.children.map(item2 => {
            return item2.children && item2.children.length > 0 ? this.menuSubItem(item2) : this.menuItem(item2)
          })
        }
      </Menu.SubMenu>
    )
    
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={this.state.defaultSelectedKeys}
        openKeys={this.state.defaultOpenKeys}
        mode="inline"
        them="dark"
      >
        {
          routers.map(item => {
            return item.children && item.children.length > 0 ? this.menuSubItem(item) : this.menuItem(item) 
          })
        }
      </Menu>
    );
  }
}
export default withRouter(SiderMenu)