import React from 'react';
import './Register.css';

class Register extends React.Component{
  render(){
      return (
        <div className="Register">
        <h1>Logo</h1>
        <ul>
        <li>
          <input 
            className = "user_email" 
            type="email"
            placeholder="이메일">
          </input>
          </li>

          <li>
          <input 
            className = "user_nickname" 
            type="text"
            placeholder="닉네임">
          </input>
          </li>

          <li>
          <select className = "user_region">
                <option value="서울">서울</option>
                <option value="인천">인천</option>
                <option value="경기">경기</option>
          </select>
          </li>

          <li>
          <input 
            className = "user_regist_pw" 
            type="password" 
            placeholder="비밀번호">
          </input>
          </li>

          <li>
          <input 
            className = "user_regist_pw_check" 
            type="password" 
            placeholder="비밀번호 확인">
          </input>
          </li>

          <li>
            <button id="num_button">인증번호 요청</button>
          </li>

        </ul>
      </div>
      );
    }
}

export default Register;
