import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './comment-list.css'

export default class CommentList extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    removeComment: PropTypes.func.isRequired,
  }

  render() {
    const {comments, removeComment} = this.props
    const display = comments.length ? 'none' : 'block'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <CommentItem key={index} index={index} comment={comment} removeComment={removeComment}/>)
          }
        </ul>
      </div>
    )
  }
}