import React, { useState } from 'react'
import { PlusIcon } from "@heroicons/react/24/solid"
import Assignmentcard from './assignmentcard'
import ViewAssignment from './ViewAssignment'
import Data from '../data.json'
import { Outlet } from 'react-router-dom'

const Classroom = () => {
    const [modal, showModal] = useState(false)

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl pt-4'>Assignments</h1>
                <button
                    onClick={() => window.my_modal_1.showModal()}
                    className='px-4  py-2 flex items-center gap-2 bg-blue-600 rounded-md text-sm'>
                    <PlusIcon className='w-5 font-semibold' />
                    New
                </button>
            </div>


            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-medium mb-9 text-lg">Create New Assignment</h3>
                    <div className='gap-2 flex-col flex m-2'>
                        <label htmlFor="name">Subject </label>
                        <input type="text" className='outline-none p-2 rounded-md' />
                    </div>
                    <div className='gap-2 flex-col flex m-2'>
                        <label htmlFor="name">Teacher name</label>
                        <input type="text" className='outline-none p-2 rounded-md' />
                    </div>
                    <div className='gap-2 flex-col flex m-2'>
                        <label htmlFor="file">Choose fil</label>
                        <input type="file" className="file-input file-input-bordered p-2 h-auto outline-none file-input-sm w-full max-w-xs" />
                    </div>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn justify-start">Close</button>
                    </div>
                </form>
            </dialog>


            <div className='flex flex-col lg:flex-row gap-5 py-5'>
                <div className='grid grid-cols-2 gap-5 flex-1'>
                    {
                        Data.map((card) => {
                            return <Assignmentcard key={card.id} card={card} />
                        })
                    }
                </div>
                <div className='p-8 rounded-lg bg-slate-800 flex-1'>
                    <Outlet />
                    {/* <ViewAssignment /> */}
                </div>
            </div>
        </>
    )
}

export default Classroom