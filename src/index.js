import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCards from "./ApprovalCards";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCards>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00pm"
          comments="Nice"
          avatar={faker.image.avatar()}
        />
      </ApprovalCards>
      <ApprovalCards>
        <CommentDetail
          author="Sammy"
          timeAgo="Today at 5:00pm"
          comments="Nice!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCards>
      <ApprovalCards>
        <CommentDetail
          author="Samantha"
          timeAgo="Today at 4:00pm"
          comments="Nice!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCards>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
