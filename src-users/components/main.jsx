import React, {Component} from 'react'
import axios from 'axios'
//  问题: 需要知道父组件传入了一个新的prop值
export default class  extends Component {

  state = {
    firstView: true, // 显示初始提示文本
    loading: false, // 是否正在请求中
    users: [], //保存多个用户信息的数组
    errorMsg: ''  // 请求失败的提示文本
  }

  componentWillReceiveProps (newProps) { // 父组件更新了searchName状态, 我们就需要发ajax请求
    // this.props.searchName
    const searchName = newProps.searchName
    // 更新状态(请求中)
    this.setState({
      firstView: false,
      loading: true,
      users: [],
      errorMsg: ''
    })
    // 发异步ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        // 成功了, 更新状态(成功)
        const users = response.data.items.map(item => ({
          username: item.login,
          avatarUrl: item.avatar_url,
          url: item.html_url
        }))
        this.setState({
          loading: false,
          users
        })
      })
      .catch(error => {
        // 失败了, 更新状态(失败)
        this.setState({
          loading: false,
          errorMsg: '请求失败'
        })
      })


  }

  render () {
    const {firstView, loading, users, errorMsg} = this.state
    
    const {searchName} = this.props
    if(firstView) {
      return <h2>请输入关键字进行搜索{searchName}</h2>
    } else if (loading) {
      return <h2>正在请求中...</h2>
    } else if(users.length>0){
      return (
        <div className="row">
          {
            users.map((user, index) => (
              <div className="card" key={index}>
                <a href={user.url} target="_blank">
                  <img src={user.avatarUrl} style={{width: 100}}/>
                </a>
                <p className="card-text">{user.username}</p>
              </div>
            ))
          }
        </div>
      )
    } else {
      return <h2>{errorMsg}</h2>
    }

  }
}