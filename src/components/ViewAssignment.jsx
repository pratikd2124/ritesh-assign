import { useParams } from 'react-router-dom'
import Data from '../data.json'
import React from 'react'

const ViewAssignment = () => {
    const paramsId = useParams()

    const singleAssignment = Data.filter(data => data.id == paramsId.id);
    const data = singleAssignment[0] 
    
    return (
        <>
            <div className='flex items-center'>
                <div className='flex-1 flex items-center'>
                    <div className='w-20 h-20 rounded-full bg-yellow-500'>
                        <img src="" alt="" />
                    </div>
                    <div className='ml-5'>
                        <h1 className='text-2xl'>{ data.Subject || Data[0].Subject }</h1>
                        <p className='text-slate-400'>{ data.Teacher ||  Data[0].Teacher}</p>
                    </div>
                </div>
                <h2 className='text-2xl '>1/4</h2>
            </div>

            {/* list */}
            <h1 className='mb-4 mt-10 text-xl'>Homework</h1>
            {
                data.Homework.map((a) => {
                    return <Listview key={a.id} props={a} />
                })
            }

        </>
    )
}
export default ViewAssignment




const Listview = ({ props }) => {
    const { task, submission_date, marks } = props;
  return (
    <>
     <div className='flex border-b py-4 items-center'>
                <input type="checkbox" className='h-8 w-8 mr-5' name="" id="" />
                <div className='flex-1'>
                  <h2>{task }</h2>
                    <div className='flex gap-5'>
                        <p className='text-slate-400'>Tommarow</p>
                        <p className='text-slate-400'>Marks :{marks} </p>
                    </div>
                </div>
                    <button className='p-2 m-2 bg-blue-600 px-5 rounded-md'>Submit</button>
                    <button className='p-2 m-2 bg-slate-500 px-5 rounded-md'>View</button>
            </div>
    </>
  )
}