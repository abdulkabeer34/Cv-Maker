import React, { useState } from "react"
import {motion} from "framer-motion"

const Wrapper = ({icon,text,children}:{icon:React.ReactNode,text:string,children:React.ReactNode}) => {

    const [isAddtional , setIsAdditonal] = useState<boolean>(false)

    const toggleBottom = () => {
        setIsAdditonal(prev=>!prev)
    }


    return (
        <div className='w-full'>
            <div className='w-full h-20 cursor-pointer z-10 bg-white text-stone-600  p-6 px-10 rounded-lg' onClick={toggleBottom}>
                <h1 className='text-2xl flex items-center gap-x-4'>
                    {icon}
                    {text}
                </h1>
            </div>
            <motion.div
              initial={{height:0 }}
              animate={{height: isAddtional ? "auto" : 0 }}
              transition={{ duration: .4 }}
              style={{scrollbarWidth:"none" }}
              className='w-full  form-div relative bottom-2.5 pt-2  px-10 cursor-pointer bg-white rounded-lg  overflow-y-hidden'>
                <motion.div 
                initial={{height:0 }}
                animate={{height: isAddtional ? "1px" : 0  }}
                transition={{ duration: .4 }}
                className='w-11/12 mx-auto h-[1px] bg-stone-200'
                 />
                <div className='form pt-9 '>
                    {children}
                </div>
            </motion.div>
        </div>
    )
}

export default Wrapper