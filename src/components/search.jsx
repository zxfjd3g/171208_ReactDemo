import React, {Component} from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {


  search = () => {
    // 读取输入的关键字
    const searchName = this.refs.searchName.value
    // 如果有输入, 开始搜索(通知main组件)
    if(searchName) {
      // 将searchName发送给main组件  发布消息(触发事件)
      PubSub.publish('search', searchName)
    }
  }


  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref='searchName'/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}