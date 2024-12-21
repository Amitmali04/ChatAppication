import { ChatList, Sidebar } from '../sections/chat'

export default function Messages() {
  return (
    <div className='h-screen overflow-hidden'>
      <div className='h-full rounded-md border-stroke bg-slate-100 shadow-default dark:border-strokedark dark:bg-boxdark xl:flex'>

        {/* Sidebar */}
      <Sidebar />
        {/* ChatList */}
        <ChatList />
        {/* Inbox */}
      </div>
    </div>
  )
}
