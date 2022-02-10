import { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import SiderMenu from './Sider'
import MainRouter from './MainRouter'
import './index.scss'
const { Header, Content, Sider } = Layout;
export default class LayoutWrap extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={250} className="site-layout-background layout_sider">
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