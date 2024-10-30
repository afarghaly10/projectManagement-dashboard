import { Comment } from "@/state/api";
import React from "react";
import Image from "next/image";

type Props = {
  comment: Comment;
};

const CommentCard = ({ comment }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3>{comment.username}</h3>
      <p>{comment.text}</p>
      <div className="flex flex-wrap">
        <Image
          src={`/${comment.profilePictureUrl}`}
          alt={comment.username}
          width={400}
          height={200}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default CommentCard;
