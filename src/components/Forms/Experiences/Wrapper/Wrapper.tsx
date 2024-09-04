import React from "react"

const Wrapper = ({icon,text,children}:{icon:React.ReactNode,text:string,children:React.ReactNode}) => {

    const toggleBottom = (e: any) => {
        const parentElement = e?.currentTarget?.parentElement;
        const selectedElement = parentElement?.querySelector('.form-div');
        if (selectedElement) {
            selectedElement?.classList?.toggle('hidden');
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full h-20 cursor-pointer z-10 bg-white text-stone-600  p-6 px-10 rounded-lg' onClick={toggleBottom}>
                <h1 className='text-2xl flex items-center gap-x-4'>
                    {icon}
                    {text}
                </h1>
            </div>
            <div className='w-full  form-div relative bottom-2.5 min-h-60 p-6 pt-3 px-10 cursor-pointer bg-white rounded-lg '>
                <div className='w-11/12 mx-auto h-[1px] bg-stone-200' />
                <div className='form pt-9'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper