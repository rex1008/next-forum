import Image from "next/image";
import React from "react";

export default function CommentShow() {
  return (
    <div className="border mt-2 p-4 rounded">
      <div className="flex gap-3">
        <Image
          src="/avatar.png"
          alt="User Avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">zhangsan</p>
          <p className="flex justify-between items-center">
            <span className="flex-1 text-gray-900">A comment</span>
            <span className="w-[150px] text-right text-gray-400 text-sm">
              20250726
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
