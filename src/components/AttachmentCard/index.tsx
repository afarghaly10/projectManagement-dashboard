import { Attachment } from "@/state/api";
import React from "react";
import Image from "next/image";

type Props = {
  attachment: Attachment;
};

const AttachmentCard = ({ attachment }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h2 className="px-48 py-2 font-bold dark:text-white">
        {attachment.fileName}
      </h2>
      <div className="flex flex-wrap">
        <Image
          src={`/${attachment.fileUrl}`}
          alt={attachment.fileName}
          width={400}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="flex gap-4 py-2">
        <Image
          src={`/${attachment.profilePictureUrl}`}
          alt="profile picture"
          width={32}
          height={32}
          className="rounded-full"
        />
        <p className="py-2 dark:text-white">
          <strong>{attachment.username}</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default AttachmentCard;
