import React from 'react';
import { Col,  Form, Input, Row, } from 'antd'





const Tempaltes: React.FC = () => {

return (
      
    <div className='content-area mx-auto  w-10/12 '>
        <div className='mb-10'>
            <h1 className='text-4xl'>Templates</h1>
            <p className='text-gray-500 text-sm mt-2'>Chose Your Favourite Template</p>
        </div>
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
                rules={[{required: true, message: 'Please input your last name!' }]}
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
                rules={[{type:"email", required: true, message: 'Please provider valid email!' }]}
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
                <Input type='number' prefix={false} addonAfter={false} maxLength={15}/>
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
     </div>
);
};

export default Tempaltes;

