import React, {Component} from 'react'
import axios from 'axios'


export default class App extends Component {

  state = {
    repoName: '',
    repoUrl: ''
  }

  componentDidMount () {
    // 执行异步ajax请求
    const url = `https://api.github.com/search/repositories?q=r&sort=stars`
    /*axios.get(url)
      .then( (response) => {
        console.log('success', response.data)
        const result = response.data
        const mostRepo = result.items[0]
        const repoName = mostRepo.name
        const repoUrl = mostRepo.html_url
        // 更新状态
        this.setState({
          repoUrl,
          repoName
        })
      })
      .catch((error) => {
        console.log('请求失败', error)
      });*/
    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      const mostRepo = data.items[0]
      const repoName = mostRepo.name
      const repoUrl = mostRepo.html_url
      // 更新状态
      this.setState({
        repoUrl,
        repoName
      })
    }).catch((e) => {
      console.log(e)
    });

  }

  render() {
    const {repoName, repoUrl} = this.state
    if(!repoName) {
      return <h2>LOADING...</h2>
    } else {
      return (
        <p>MOST Star repo is <a href={repoUrl}>{repoName}</a></p>
      )
    }
  }
}