import { Component } from 'react'
import { Button } from 'antd'

export default class getUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button_txt: '获取账号信息1'
    }
  }
  getUser = () => {
    if (!this.props.username) {
      this.setState({ button_txt: '再次获取' })
    } else {
      this.setState({ button_txt: '已经获取到了' })
    }
  }
  render () {
    return (
      <Button onClick={ this.getUser } className='login_btn' type="primary">{ this.state.button_txt }</Button>
    )
  }
}