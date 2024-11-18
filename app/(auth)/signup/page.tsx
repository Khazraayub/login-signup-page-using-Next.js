import React from 'react'

const Signup = () => {
  return (
    <center>
        <form className=" bg-white w-1/2 mt-20 pl-3 pr-3 rounded"> 
            <h1 className='text-4xl font-bold text-teal-800'>Signup Form</h1>
            <label className='flex justify-start font-bold text-teal-800'>Username </label>
            <input className=' bg-slate-200 inline-block text-xs mt-2 w-full pt-2 pb-2 pl-2 box-border border-solid border-2'
             type="text" placeholder="Enter username" name="uname" required></input>

            <label className='flex justify-start font-bold mt-2 text-teal-800 '>Password </label>
            <input className='bg-slate-200 inline-block text-xs w-full mt-2 pt-2 pb-2 pl-2 box-border border-solid border-2'
             type="password" placeholder="Enter password" name="password" required></input>

            <label className='flex justify-start font-bold mt-2 text-teal-800 '>Repeat Password </label>
            <input className='bg-slate-200 inline-block text-xs w-full mt-2 pt-2 pb-2 pl-2 box-border border-solid border-2'
             type="password" placeholder="Repeat password" name="password" required></input>

            <p className='flex justify-start mt-2'>By creating an account you agree to our 
            <a href="/" className="text-blue-400 underline"> Terms & Privacy</a>.</p>
             

             <button className='bg-green-600 w-full mt-5 border-none cursor-pointer font-bold p-2 text-white hover:bg-green-700'
              type='submit'>Signup</button>

            <button className='bg-red-600 w-full mt-5 border-none cursor-pointer font-bold p-2 text-white hover:bg-red-700'
                type='button'>Cancel</button>
        </form>
    </center>
  )
}

export default Signup