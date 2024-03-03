"use client"
import React, { useRef } from 'react'
import { FaRegEnvelope } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import './styles.css'
import Link from 'next/link';
const Home = () => {
  const showBtn = useRef()
  const showBtn2 = useRef()
  const showDetails = useRef()
  let showDatafunc = () => {

    showBtn.current.classList.toggle('hidden');
    showBtn2.current.classList.toggle('hidden');
    showDetails.current.classList.toggle('hidden');

  }

  let employeeDetails = [
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
    {
      name: 'Piyush',
      employeeId: 'M123',
      role: 'manager'
    },
  ]
  return (
    <main className='flex flex-col items-center gap-6'>
      <form action="" className=' bg-black/25 h-[85vh] rounded-2xl backdrop-blur-md'>
        <div className="container">
          <header>
            <h1>
              Login
            </h1>
          </header>
          <CgProfile className='fa-circle-user my-3' />

          <div className="logincontainer flex flex-col gap-5 items-center px-3 ">

            <div className="box">
              <h3 className='text-xl'><MdDriveFileRenameOutline className='inline-block mr-2 text-3xl ' />    Employee Id :</h3>
              <input type="text" name="employeeid" id="employeeid" required placeholder="Enter Your Employee Id" className=' text-white px-4 py-2 rounded-md bg-black bg-opacity-25 my-2' />
            </div>

            <div className="box">
              <h3 className='text-xl'><IoKeyOutline className='inline-block mr-2 text-3xl' />     Password :</h3>
              <input type="password" name="password" id="password" required placeholder="Enter Your Password" className='text-white px-4 py-2 rounded-md bg-black bg-opacity-25 my-2' />
            </div>
            <div className="footbox flex flex-col">
              <button type='submit' className='submitbtn font-serif font-bold'>Submit</button>
              <Link href={`/signup`}><p className='mt-12 text-white italic cursor-pointer hover:underline'>If Not Registered then, Sign Up</p></Link>
            </div>



          </div>

        </div>
      </form>

      <div className=" bg-black/25  rounded-2xl backdrop-blur-md w-[70vw] p-5">
        <button className='text-xl font-bold text-pink-400' ref={showBtn} onClick={showDatafunc}>Show All Employee Details</button>
        <button className='text-xl font-bold text-pink-400 hidden' ref={showBtn2} onClick={showDatafunc}>Close All Employee Details</button>
        
        <div ref={showDetails} className='hidden'>
          {employeeDetails.map((employee) => {
            return (
              <div key={employee.employeeId}  className='text-md text-white p-6 font-mono '>
                <h2>Name: {employee.name} </h2>
                <h2>Employee Id: {employee.employeeId} </h2>
                <h2>Role: {employee.role} </h2>
                <br />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Home