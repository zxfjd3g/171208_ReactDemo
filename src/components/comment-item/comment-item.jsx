import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './comment-item.css'

export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  render () {
    const {comment} = this.props

    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;">删除</a>
        </div>
        <p className="user"><span>{comment.name}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}