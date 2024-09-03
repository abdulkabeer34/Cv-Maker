import React  from 'react';
import {Button} from 'antd'
import {BriefcaseBusiness} from 'lucide-react'

const Personal: React.FC = () => {
 
    const toggleBottom = (e:any)=>{
        const parentElement = e?.target?.parentElement?.parentElement;

        // Perform query selection on the parent element
        const selectedElement = parentElement?.querySelector('.form');

        // console.log(selectedElement)
    
        if (selectedElement) {
          console.log('Element selected:', selectedElement);
          // Example: Toggle a class on the selected element
          selectedElement?.classList?.toggle('hidden');
        }
    
        console.log('Parent element:', parentElement);
    }

return (
      
    <div className='content-area mx-auto  w-10/12 '>
        <div className='mb-10 flex justify-between items-center'>
            <div>
                <h1 className='text-4xl'>Work Experiences</h1>
                <p className='text-gray-500 text-sm mt-2'>Add Your Own Perosnal Experiences</p>
            </div>
            <div>
                <Button type='primary' >Work Experience</Button>
            </div>
        </div>
        <div className='mt-6 flex flex-col items-center '>
            <div className='w-full h-20 cursor-pointer z-10 bg-white text-stone-600  p-6 rounded-md' onClick={toggleBottom}>
                <h1 className='text-2xl flex items-center gap-x-4'>
                    <BriefcaseBusiness />
                    Experiences
                </h1>
            </div>
            <div className='w-full form relative bottom-1.5 h-60 cursor-pointer bg-white rounded-md '></div>
        </div>
     </div>
);
};

export default Personal;

