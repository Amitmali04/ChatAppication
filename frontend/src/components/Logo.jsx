import React from 'react'
import { ChatCircleText } from "@phosphor-icons/react";
export default function Logo() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <ChatCircleText size={32} />
      <div className="text-2xl font-medium taxt-body dark:text-white">
        Chat App
      </div>
      
    </div>
  );
}
