import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';

class App extends React.Component{
  gotoRegist = () =>
  {
    this.props.history.push('/Register');
  }
  gotoHome = () =>
  {
    this.props.history.push('/Home');
  }
  render(){
      return (
      <div className="Login">
        <h1>Logo</h1>
        <ul>
          <li>
          <input 
            className = "user_id" 
            type="text" 
            placeholder="아이디">
          </input>
          </li>

          <li>
          <input 
            className = "user_pw" 
            type="password" 
            placeholder="비밀번호">
          </input>
          </li>
          <li>
            <button id="login_button" onClick = {this.gotoHome}>로그인</button>
          </li>
          <li>
            <button id="regist_button" onClick = {this.gotoRegist}>회원가입</button>
          </li>
        </ul>
      </div>
      );
    }
}

export default withRouter(App);
