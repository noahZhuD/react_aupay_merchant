import { Component } from 'react'

export default class Home extends Component {
  componentDidMount() {
    console.log('首页', this.props)
  }
  render() {
    return (
      <div>我是首页1</div>
    )
  }
}