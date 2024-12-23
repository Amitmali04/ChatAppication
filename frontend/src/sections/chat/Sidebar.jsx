import { Chat, SignOut } from '@phosphor-icons/react'

export default function Sidebar() {
  return (
    <div className='flex flex-col border-r border-stroke p-2 dark:border-strokedark'>
      
      <div className='mx-auto border rounded-md border-stroke p-2 dark:border-strokedark'>
        <Chat size={24} />
      </div>

      <div className='flex flex-col grow'>

      </div>

      <div className=''>
      <div className='mx-auto border rounded-md border-stroke p-2 dark:border-strokedark'>
        <SignOut size={24} />
      </div>
      </div>
    </div>
  )
}
