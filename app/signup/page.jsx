
import React from 'react'
import { FaRegEnvelope } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa6";
import '../styles.css'
import Link from 'next/link';

const signUp = () => {
    return (
        <main>
            <form action="" className='  bg-black/25  rounded-2xl backdrop-blur-md'>
                <div className="container">
                    <header>
                        <h1>
                            Sign Up
                        </h1>
                    </header>
                    <CgProfile className='fa-circle-user my-3' />

                    <div className="logincontainer flex flex-col gap-5 items-center px-3 ">

                        <div className="box">
                            <h3 className='text-xl'><MdDriveFileRenameOutline className='inline-block mr-2 text-3xl ' /> Name :</h3>
                            <input type="text" name="name" id="name" required placeholder="Enter Your Name" className=' text-white px-4 py-2 rounded-md bg-black bg-opacity-25 my-2' />
                        </div>

                        <div className="box">
                            <h3 className='text-xl'><FaRegEnvelope className='inline-block mr-2 text-3xl ' />    Email Id :</h3>
                            <input type="email" name="email" id="email" required placeholder="Enter Your Email" className=' text-white px-4 py-2 rounded-md bg-black bg-opacity-25 my-2' />
                        </div>

                        <div className="box">
                            <h3 className='text-xl'><FaRegIdCard className='inline-block mr-2 text-3xl ' />    Employee Id :</h3>
                            <input type="text" name="employeeid" id="employeeid" required placeholder="Enter Your Employee Id" className=' text-white px-4 py-2 rounded-md bg-black bg-opacity-25 my-2' />
                        </div>

                        <div className="box">
                            <h3 className='text-xl'><IoKeyOutline className='inline-block mr-2 text-3xl' />     Password :</h3>
                            <input type="password" name="password" id="password" required placeholder="Enter Your Password" className='text-white px-4 py-2 rounded-md bg-black bg-opacity-25 my-2' />
                        </div>

                        <div className="box">
                            <h3 className='text-xl'><MdPhone className='inline-block mr-2 text-3xl' />     Mobile No :</h3>
                            <input type="password" name="password" id="password" required placeholder="Enter Your Password" className='text-white px-4 py-2 rounded-md bg-black bg-opacity-25 my-2' />
                        </div>



                        <div className="footbox flex flex-col">
                            <button type='submit' className='submitbtn font-bold font-serif'>Submit</button>
                            <Link href={`/`}><p className='mt-12 text-white italic cursor-pointer hover:underline'>If Registered then, Login</p></Link>
                        </div>

                    </div>

                </div>
            </form>
        </main>
    )
}

export default signUp