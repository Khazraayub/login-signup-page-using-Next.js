"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className="text-8xl flex justify-center pt-44 text-black">
        <Typewriter
        options={{
            strings: ['Hello World!!!!!!'],
            autoStart: true,
            loop: true,
        }}
        />
        
    </div>
  )
}

export default Home
