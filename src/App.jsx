import React, { useRef } from 'react'
import Images from './components/Images'

const App = () => {
  const ref=useRef(null)
  return (
    <>
    <div ref={ref} className='h-screen w-full bg-slate-950 overflow-hidden'>
      <Images referc={ref}/>
    </div>
    </>
  )
}

export default App