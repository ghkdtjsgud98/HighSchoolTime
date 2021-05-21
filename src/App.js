import React from 'react';
import './App.css';

class App extends React.Component{
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
      <button id="login_button">로그인</button>
      </li>
      <li>
      <button id="regist_button">회원가입</button>
      </li>
      </ul>
      </div>
      );
    }
}

export default App;
