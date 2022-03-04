import { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons'
import SiderMenu from './Sider'
import MainRouter from './MainRouter'
import './index.scss'
import Logo from '@/Assets/images/logo.png'
import LogoMin from '@/Assets/images/logo_min.png'
const { Header, Content, Sider } = Layout;
export default class LayoutWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  collapsedClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
    console.log('点击了')
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className={ this.state.collapsed ? 'logo logo_close' : 'logo' }>
            {
              this.state.collapsed ? <img src={LogoMin} alt="" /> : <img src={Logo} alt="" />
            }
          </div>
          <span onClick={this.collapsedClick} className='collapsed_icon'><MenuFoldOutlined /></span>
        </Header>
        <Layout>
          <Sider width={250} className="site-layout-background layout_sider" collapsed={ this.state.collapsed }>
            <SiderMenu />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <MainRouter />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}