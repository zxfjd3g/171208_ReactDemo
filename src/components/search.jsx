import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Search extends Component {

  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }

  search = () => {
    // 读取输入的关键字
    const searchName = this.refs.searchName.value
    // 如果有输入, 开始搜索(通知main组件)
    if(searchName) {
      this.props.setSearchName(searchName)
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