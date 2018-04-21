import React, {Component} from 'react'

import CommentAdd from './components/comment-add/comment-add'
import CommentList from './components/comment-list/comment-list'

export default class App extends Component {

  state = {
    comments: [
      {name: 'Tom', content: 'React不简单'},
      {name: 'Jack', content: 'ReactSO简单'},
      {name: 'Bob', content: 'React还行吧'}
    ]
  }

  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    // 更新状态
    this.setState({
      comments
    })
  }

  removeComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    // 更新状态
    this.setState({
      comments
    })
  }

  render() {
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment}/>
          <CommentList comments={comments} removeComment={this.removeComment}/>
        </div>
      </div>
    )
  }
}