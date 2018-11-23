import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const addImage = () => {
  return faker.image.avatar();
};

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>WARNING!</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 10:53 PM"
          commentText="Sammi rocks"
          avatarImage={addImage()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Steve"
          timeAgo="Today at 02:45 PM"
          commentText="HE knows his props"
          avatarImage={addImage()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 05:53 PM"
          commentText="I'd give him huge props!"
          avatarImage={addImage()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
