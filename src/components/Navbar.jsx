import { ChartBarSquareIcon } from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { DocumentChartBarIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center my-2 mx-[6rem] px-10'>
        <NavLink to={'/admin/dashboard'} className='flex gap-2 p-2'>
            <ChartBarSquareIcon className='w-6' />
            <p>Dashboard</p>
        </NavLink>
        <NavLink to={'/admin/classroom'} className='flex gap-2 p-2'>
            <UsersIcon className='w-6' />
            <p>Classroom</p>
        </NavLink>
        <NavLink to={'/admin/chatroom'} className='flex gap-2 p-2'>
            <ChatBubbleLeftRightIcon className='w-6' />
            <p>Chatroom</p>
        </NavLink>
        <NavLink to={'/admin/notice'} className='flex gap-2 p-2'>
            <DocumentChartBarIcon className='w-6' />
            <p>Notice</p>
        </NavLink>
        <NavLink to={'/admin/activity'} className='flex gap-2 p-3'>
            <UserPlusIcon className='w-6' />
            <p>Activity</p>
        </NavLink>
        <NavLink to={'/admin/elibrary'} className='flex gap-2 p-3'>
            <BookOpenIcon className='w-6' />
            <p>E-library</p>
        </NavLink>
        <NavLink to={'/admin/tpo'} className='flex gap-2 p-3'>
            <ChartBarSquareIcon className='w-6' />
            <p>TPO</p>
        </NavLink>
    </div>
  )
}

export default Navbar