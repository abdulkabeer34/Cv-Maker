import React, { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select, } from 'antd'
import { PlusCircle } from 'lucide-react';
import {motion} from "framer-motion"



const Personal: React.FC = () => {
   const [isAddtional , setIsAdditonal] = useState<boolean>(false)


   
   function smoothScrollTo(endY: number, duration: number): void {
    const startY = window.scrollY;
    const distance = endY - startY;
    let startTime: number | null = null;
  
    function scrollStep(currentTime: number): void {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Clamp between 0 and 1
      const easeInOut = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress; // Ease-in-out function
  
      window.scrollTo(0, startY + distance * easeInOut);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }
  
    requestAnimationFrame(scrollStep);
  }
  

   useEffect(()=>{
     if(isAddtional){
      smoothScrollTo(document.body.scrollHeight, 400);

      //  setTimeout(()=>{
        // window.scrollTo({
        //   top: 99999999999999999999,
        //   behavior: 'smooth'
        // });
      //  },400)
     }
   },[isAddtional])

  return (

    <div className='content-area mx-auto  w-10/12 '>
      <div className='mb-10'>
        <h1 className='text-4xl'>Peronal Information</h1>
        <p className='text-gray-500 text-sm mt-2'>Enter Your Peronal Information</p>
      </div>
      <Form layout='vertical'>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ type: "email", required: true, message: 'Please provider valid email!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please provider phone number!' }]}
            >
              <Input type='number' prefix={false} addonAfter={false} maxLength={15} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please input your personal address!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="City/Town"
              name="city"
              rules={[{ required: true, message: 'Please input your city/town name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>



        <motion.div className='overflow-x-hidden'
           initial={{height:0}}
           animate={{height: isAddtional ? "auto" : 0}}
           transition={{ duration: .4 }}
           style={{scrollbarWidth:"none"}}
        >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Date Of Birth"
              name="dateOfBirth"
              rules={[{ required: true, message: 'Please input your personal address!' }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Place of Birth"
              name="birthPlce"
              rules={[{ required: true, message: 'Please input your city/town name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Driving License"
                name="drvingLicense"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Select
                  placeholder="Chose Gender"
                  allowClear
                  options={[
                    { value: 'female', label: 'Female' },
                    { value: 'male', label: 'Male' },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Nationality"
                name="nationality"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Martial Status"
                name="martialStatus"
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="LinkedIn"
                name="linkedin"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input type='number' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Website"
                name="website"
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </motion.div>
          <Row gutter={16} className='mt-10 w-full'>
            <Col span={24}>
              <Button className='w-full h-14 text-lg flex gap-x-4' onClick={()=>setIsAdditonal(prev=>!prev)}>
                <PlusCircle />
                <span>Additional Information</span>
              </Button>
            </Col>
          </Row>
      </Form>
    </div>
  );
};

export default Personal;

