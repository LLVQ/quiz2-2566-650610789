import { comments } from "@/libs/comments";
import { Reply } from "./Reply";

export const Comment = (props) => {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={props.userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{props.username}</span>
          <br />
          <span>{props.commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src={props.likeNum > 0 ? "/like.svg" : ""} width={20}></img>
            <span className="text-muted">
              {props.likeNum > 0 ? props.likeNum : undefined}
            </span>
          </div>
        </div>
      </div>
      {/* map-loop render Reply component here */}
      {/* {replies.map((x) => (
        <Reply
          username={x.username}
          userImagePath={x.userImagePath}
          replyText={x.replyText}
          likeNum={x.likeNum}
        />
      ))} */}
    </div>
  );
};

