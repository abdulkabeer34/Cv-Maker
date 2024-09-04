import React from 'react';
import { Button } from 'antd'
import WorkExperience from './WorkExperiences/WorkExperience';
import References from './References/References';
import ResumeObjective from './ResumeObjective/ResumeObjective';
import EducationAndQualtications from './Education&Qualifications/Education&Qualtications';
import Interest from './Hobby/Hobby';
import Skills from './Skills/Skills';

const Personal: React.FC = () => {
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
            <div className='mt-6 flex flex-col items-center gap-y-10'>
                 <WorkExperience/>
                 <References />
                 <ResumeObjective/>
                 <EducationAndQualtications/>
                 <Interest/>
                 <Skills/>
            </div>
        </div>
    );
};

export default Personal;

