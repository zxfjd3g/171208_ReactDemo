import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './comment-item.css'

export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }

  removeItem = () => {
    const {comment, removeComment, index} = this.props
    // 先确定
    if(window.confirm(`确定删除${comment.name}的评论吗?`)) {
      // 删除
      removeComment(index)
    }

  }

  render () {
    const {comment} = this.props

    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.removeItem}>删除</a>
        </div>
        <p className="user"><span>{comment.name}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}