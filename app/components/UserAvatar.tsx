import React from "react";
import Image from "next/image";
import defaultAvatar from "@/public/default.png";

interface UserAvatarProps {
  image: string;
  width: number;
  height: number;
}

const UserAvatar = ({ image, height, width }: UserAvatarProps) => {
  return (
    <Image
      src={image ? image : defaultAvatar}
      alt="avatar"
      className="w-9 border rounded-full hover:cursor-pointer max-h-10"
      referrerPolicy="no-referrer"
      width={width}
      height={height}
    />
  );
};

export default UserAvatar;
