
import React from 'react'
import { Sidebar } from '../sections/chat'

export default function Messages() {
  return (
    <div className='h-screen overflow-hidden'>
      <div className='h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>

        {/* Sidebar */}
      <Sidebar />
        {/* ChatList */}
        {/* Inbox */}
      </div>
    </div>
  )
}