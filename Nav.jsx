import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className='flex items-center justify-between py-5 px-10'>
      <h2 className='text-2xl'>Techunters</h2>
      <div className='flex gap-8'>
        <h4>Home</h4>
        <h4>Services</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Your Account</h4>
      </div>
    </nav>
    </>
  )
}

export default Nav
