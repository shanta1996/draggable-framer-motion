import React from 'react'
import { motion } from "motion/react"

const Images = ({referc}) => {
    const images=[
        {
            src:"https://i.pinimg.com/474x/4e/a5/09/4ea5094c7b811ca9085930657d4c2641.jpg"
        },
        {
            src:"https://i.pinimg.com/236x/49/0f/9b/490f9bdd4a028e25e5ad7a10f3317b57.jpg"
        },
        {
            src:"https://i.pinimg.com/236x/0c/a4/9a/0ca49a950f92b55beb259e7cc012b5e3.jpg"
        },
        {
            src:"https://i.pinimg.com/236x/f9/68/e8/f968e8d51401431870bb5d56847340ac.jpg"
        },
    ]
  return (
    <>
    <h1 className='text-slate-50 font-bold text-3xl text-center pt-10'>DRAG THE PICTURES</h1>
    <div className='h-screen flex  justify-evenly items-center flex-wrap'>
      {images.map((image,i)=>(
        <motion.img drag dragConstraints={referc} whileDrag={{scale:1.1}} className='object-cover h-[100px]  md:h-[300px] rounded-xl' src={image.src} alt="" />
      ))}
    </div>
    </>
  )
}

export default Images
