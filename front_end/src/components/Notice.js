import React from "react";
import NoticeCard from "./cards/NoticeCard";

function Notice(props) {
  let data = props.notice;
  console.log(data);
  return (
    <div className="noticeWrap">
      <h1>Notice</h1>

      {data.map((d) => {
        return (
          <div>
            <NoticeCard id={d.id} question={d.question} answer={d.answer} />
          </div>
        );
      })}
    </div>
  );
}

export default Notice;
