import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Assignments from './components/Classroom'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='px-[8rem]'>
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard