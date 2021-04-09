import React from "react";
import "../css/Signup&Login.css";
function Signup() {
  return (
    <div className="signup">
      <div className="join">
        <div className="join__column">
          <form method="get" id="join__column-form">
            <fieldset>
              <legend>아이디</legend>
              <input name="id" type="text" />
            </fieldset>
            <fieldset>
              <legend>이메일</legend>
              <input name="email" type="email" />
            </fieldset>
            <fieldset>
              <legend>비밀번호</legend>
              <input name="password" type="password" />
            </fieldset>
            <fieldset>
              <legend>비밀번호 재확인</legend>
              <input name="password" type="password" />
            </fieldset>
            <input
              id="join-submit"
              name="join-submit"
              type="submit"
              value="가입하기"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
