import React from 'react'

export default function Footer() {
  let footerstyle ={
    position :"absolute",
    top:"90vh",
    width:"100%"
  }
  return (
    <footer style={footerstyle} className='bg-dark text-light'><p className='text-center p-4'>Copyright &copy; My TodosList.com </p></footer>
  )
}
