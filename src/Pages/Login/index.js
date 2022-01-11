import { Form, Input, Button, Checkbox } from 'antd';
import { Component } from 'react'
import { verifyCount } from '@/Utils/verify.js'
import './index.scss'
import { LoginApi } from '@/Api/login.js'
import { encode64 } from '@/Utils/encode'
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      form: { merchantId: '', password: '' }
    }
  }
  usernameVal = (rule, value, callback) => {
    const regUser = /^[a-zA-Z0-9_]{1,}$/g
    if (!regUser.test(value) || !value) {
      return callback('账号只能存在数字字母下划线组合')
    } else {
      return callback()
    }
  }
  onFinish = (values) => {
    console.log('Success:', values);
    const sendData = JSON.parse(JSON.stringify(values))
    sendData.password = encode64(sendData.password)
    sendData.code = null
    LoginApi(sendData).then(res => {
      console.log(res, 'rrr')
    })
  };
  saveUser = (e) => {
    let value = Object.assign({}, this.state.form, { merchantId: e.target.value })
    this.setState({
      form: value
    })
  }
  getUser = () => {
    console.log(this.state.form.merchantId)
  }
  render() {
    // const { } = this.state
    return (
      <div className="login_bg">
        <div className="login_wrap">
          <h1>auPay商户中心</h1>
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
              <Button onClick={ this.getUser } className='login_btn' type="primary">
                获取账号信息
              </Button>
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