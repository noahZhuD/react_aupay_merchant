import { Form, Input, Button } from 'antd';
import { Component } from 'react'
import { withRouter }  from 'react-router-dom'
import './index.scss'
import { LoginApi } from '@/Api/login.js'
import { encode64 } from '@/Utils/encode'
import GetUsername from './components/getUsername';
import { setToken } from '@/Utils/token.js'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      form: { merchantId: '', password: '' },
      login_h1: 'auPay商户中心'
    }
  }
  usernameVal = (rule, value, callback) => {
    const regUser = /^[a-zA-Z0-9_]{1,}$/g
    if (!regUser.test(value) || !value) {
      return Promise.reject('账号只能存在数字字母下划线组合')
    } else {
      return Promise.resolve()
    }
  }
  onFinish = (values) => {
    console.log('Success:', values);
    const sendData = JSON.parse(JSON.stringify(values))
    sendData.password = encode64(sendData.password)
    sendData.code = null
    LoginApi(sendData).then(res => {
      if (res.data && res.data.code === 200) {
        setToken(res.data.data)
        this.props.history.push('/index/home')
      }
    })
  };
  saveUser = (e) => {
    let value = Object.assign({}, this.state.form, { merchantId: e.target.value })
    this.setState({
      form: value
    })
  }
  updateH1 = () => {
    this.setState({
      login_h1: '哈哈哈 我点击了'
    })
  }
  
  render() {
    // const { } = this.state
    return (
      <div className="login_bg">
        <div className="login_wrap">
          <h1 onClick={ this.updateH1 }>{ this.state.login_h1 }</h1>
          <Form
            name="login"
            onFinish={this.onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="merchantId"
              rules={[{ validator: this.usernameVal }]}
            >
              <Input onChange={ this.saveUser } placeholder='账号' />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请正确输入密码' }]}
            >
              <Input.Password placeholder='密码' />
            </Form.Item>
            <Form.Item>
              <GetUsername username={ this.state.form.merchantId }></GetUsername>
            </Form.Item>
            <Form.Item>
              <Button className='login_btn' type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        
      </div>
    )
  }
}
export default withRouter(Login)