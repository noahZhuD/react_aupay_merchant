import { Menu } from 'antd';
import { Component } from 'react'
import routers from '@/Router/index.js'
import { Link } from 'react-router-dom'

export default class SiderMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultOpenKeys: [],
      defaultSelectedKeys: []
    }
  }
  componentWillMoun() {
    console.log(this.props, 123)
    this.setState({
      defaultOpenKeys: ['/index/property'],
      defaultSelectedKeys: ['/index/property/overview']
    })
  }
  handleClick = e => {
    
    console.log('click ', e);
  };
  // 无子级
  menuItem = (item) => {
    return <Menu.Item key={ item.path }><Link to={ item.path }>{ item.meta.title }</Link></Menu.Item>
  }
  // 有子级
  menuSubItem = (item) => {
    return (
      <Menu.SubMenu key={ item.path } title={ item.meta.title }>
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
        defaultSelectedKeys={this.defaultSelectedKeys}
        defaultOpenKeys={this.defaultOpenKeys}
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