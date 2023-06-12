import { avatarColors } from "infrastructure/config/mock/contants";
import React, { FC } from "react";

import { avatarImgs } from "infrastructure/config/mock/data";
import VerifyIcon from "application/sections/VerifyIcon";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
  userName?: string;
  hasChecked?: boolean;
  hasCheckedClass?: string;
  position?: number;
}

const Avatar: FC<AvatarProps> = ({
  containerClassName = "ring-1 ring-black dark:ring-neutral-100",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-full",
  imgUrl,
  userName,
  hasChecked = false,
  hasCheckedClass = "w-4 h-4 bottom-1 -right-0.5",
  position = 0,
}) => {
  const url = imgUrl || avatarImgs[position];
  const name = userName || "Camilo González";
  const _setBgColor = (name: string) => {
    const backgroundIndex = Math.floor(
      name.charCodeAt(0) % avatarColors.length
    );
    return avatarColors[backgroundIndex];
  };

  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && (
        <img
          className={`absolute inset-0 w-full h-full object-cover ${radius}`}
          src={url}
          alt={name}
        />
      )}
      <span className="wil-avatar__name">{name[0]}</span>

        <span className={`  text-white  absolute  ${hasCheckedClass}`}>
          <VerifyIcon className="" hasChecked={hasChecked} />
        </span>
    </div>
  );
};

export default Avatar;
