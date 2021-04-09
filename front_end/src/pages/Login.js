import React from "react";
import "../css/Signup&Login.css";
function Login() {
  return (
    <div className="signup">
      <div class="join">
        <div class="join__column">
          <form method="get" id="join__column-form">
            <fieldset>
              <legend>아이디</legend>
              <input name="id" type="text" />
            </fieldset>
            <fieldset>
              <legend>비밀번호</legend>
              <input name="password" type="password" />
            </fieldset>
            <input
              id="join-submit"
              name="join-submit"
              type="submit"
              value="로그인하기"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
