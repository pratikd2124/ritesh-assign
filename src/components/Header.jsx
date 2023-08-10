import React from 'react'
import profile from '../assets/profilepic.png'
import { FireIcon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <>
            <div className="navbar py-5">
                <div className="">
                    <FireIcon className='h-10 text-blue-600 w-10' />
                    <a className="text-xl mx-3">daisyUI</a>
                </div>
                <div className="flex flex-1 justify-between px-10 gap-2">
                    <div className='w-[40rem]'>
                        <input type="text" placeholder="Type here" className="input  input-sm w-full " />
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='bell'>
                          <BellIcon className='w-12 p-3 rounded-full' />
                        </div>
                        <div className=" w-12">
                            <img className='rounded-full border-2' src={profile} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header