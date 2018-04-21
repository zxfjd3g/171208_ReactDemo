/*
自定义组件类
 */
import React, {Component} from 'react'
import logo from './logo.svg'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="logo"/>
        <h2 className='title'>第一个react组件</h2>
      </div>
    )
  }
}