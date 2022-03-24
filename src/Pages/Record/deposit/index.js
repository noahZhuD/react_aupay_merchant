import { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'

class Deposit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '我是标题',
      name: ''
    }
  }
  componentDidMount() {
    console.log(this.props.loginReducer, 'uuuuu')
    this.setState({ name: this.props.loginReducer.name })
  }
  render() {
    const columns =  [
      { title: '系统订单号', dataIndex: 'name', key: 'name', },
      { title: '商户订单号', dataIndex: 'name', key: 'name', },
      { title: '发起时间', dataIndex: 'name', key: 'name', },
      { title: '充值金额(CNY)', dataIndex: 'name', key: 'name', },
      { title: '充值币种/钱包协议', dataIndex: 'name', key: 'name', },
      { title: 'USDT充值汇率(CNY)', dataIndex: 'name', key: 'name', },
    ]
    const dataSource = []
    return (
      <div>
        <h2>充值记录{ this.state.name }</h2>
        <div className="commit_table">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { loginReducer: state.LoginReducer }
}
// const mapDispatchToProps = () => {}
export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Deposit)