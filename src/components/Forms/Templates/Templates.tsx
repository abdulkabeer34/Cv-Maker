import React from 'react';
import { Card, Col, Row, } from 'antd'
import styled from 'styled-components';

const Tempaltes: React.FC = () => {

  return (

    <div className='content-area mx-auto  w-10/12 '>
      <div className='mb-10'>
        <h1 className='text-4xl'>Templates</h1>
        <p className='text-gray-500 text-sm mt-2'>Chose Your Favourite Template</p>
      </div>
      <Row gutter={16} justify="space-between" className='gap-y-10'>
        {
          Array.from({ length: 10 }, (_, index) => index + 1).map(() => (
            <Col span={7}>
              <AntdCard
                hoverable
                style={{ width: 270 }}
                children={false}
                className='rounded-lg'
                cover={<img alt="example" src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-full rounded-xl' style={{ borderRadius: "8px" }} />}
              />
            </Col>
          ))
        }

      </Row>
    </div>
  );
};

export default Tempaltes;


const AntdCard = styled(Card)`
   .ant-card-body{
       display: none;
    }
`

