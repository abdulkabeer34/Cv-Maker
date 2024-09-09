import React, { useState } from 'react';
import { Button, ConfigProvider, Form, Steps } from 'antd'
import Personal from './components/Forms/Personal/Personal';
import styled from "styled-components"
import Experiences from './components/Forms/Experiences/Experiences';
import Tempaltes from './components/Forms/Templates/Templates';
import Navbar from './components/Forms/Navbar/Navbar';

const steps = [
  {
    title: 'Personal',
    content: <Personal />,
  },
  {
    title: 'Experience',
    content: <Experiences />,
  },
  {
    title: 'Template',
    content: <Tempaltes />,
  },
];


const darkTheme = {
  token: {
    colorPrimary: '#78716c',
  },
};



const App: React.FC = () => {

  const [current, setCurrent] = useState<number>(0);
  const [form] = Form.useForm();
  const StepContent = steps[current].content;


  return (
    <ConfigProvider theme={darkTheme}>
      <Navbar />
      <div className='min-h-screen  overflow-y-auto  bg-[#f5f5f4] flex  justify-center'>
        <div className='container  max-w-[1142px] min-h-[800px] mb-12  scroll-smooth   h-2/5  relative'>
          <div className='header  w-10/12 mx-auto mt-12'>
            <Steps items={steps} current={current} />
          </div>
          <StyledDiv
            className='mt-16 bg-stone-200 rounded-3xl pt-[34px] overflow-y-auto'
          >
            {React.cloneElement(StepContent, { form })}
            <div className='footer w-10/12 mx-auto mt-10 mb-6'>
              <div className='mr-auto flex items-center gap-x-6 justify-end'>
                <Button disabled={current === 0} className='w-24 h-8' onClick={() => setCurrent(prev => --prev)}>Previous </Button>
                <Button disabled={current === steps.length - 1} onClick={() => setCurrent(prev => ++prev)} className='w-24 h-8' type='primary' htmlType='submit'>Next</Button>
              </div>
            </div>
          </StyledDiv>
        </div>
      </div>
    </ConfigProvider>

  );
};

export default App;



const StyledDiv = styled.div`
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

input , .ant-picker , .ant-select{
  height : 45px;
}

input[type="number"] {
-moz-appearance: textfield; /* Hide arrows in Firefox */
}

label {
  font-size: .9rem !important;
}

label::before {
  display: none !important;
 }
`