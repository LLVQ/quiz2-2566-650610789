"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          name="Pachara J 650610789"
          text="Hello"
          like="10000"
        />

        {/* Comment Example */}
        

        <Comment
          userImagePath="/profileImages/lisa.jpg"
          username="Lisa"
          commentText="จริงค่า"
          likeNum={999}
          replies
        />
        {/* Reply Example */}
        <Reply
          username="หมาน้อย"
          userImagePath="/profileImages/puppy.jpg"
          replyText="จริงค้าบบบบบบบบ"
          likeNum="2 คน"
        />

        {/* map-loop render Comment component here */}
        {comments.map((x) => (
          <Comment
            key = {x.username}
            username={x.username}
            commentText={x.commentText}
            likeNum={x.likeNum}
            userImagePath={x.userImagePath}
            replies={x.replies}
          />
        ))}
      </div>
    </div>
  );
}
