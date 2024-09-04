import { Col, DatePicker, Form, Input, Row } from 'antd'
import { BriefcaseBusiness } from 'lucide-react'
import TextArea from 'antd/es/input/TextArea';
import Wrapper from '../Wrapper/Wrapper';

const WorkExperience = () => {

  return (
          <Wrapper text='Experiences' icon={<BriefcaseBusiness />}>
            <Form layout='vertical'>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Job Title"
                  name="jobTitle"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="City/Town"
                  name="lastName"
                  rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Employer"
                  name="employer"
                  rules={[{ type: "string", required: true, message: 'Please provider valid email!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Start Date"
                  name="startDate"
                  rules={[{ required: true, message: 'Please Input The Start Date !' }]}
                >
                  <DatePicker className='w-full' picker='month' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="End Date"
                  name="endDate"
                  rules={[{ required: true, message: 'Please Input The End Date!' }]}
                >
                  <DatePicker className='w-full' picker='month' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Descritption"
                  name="description"
                  rules={[{ required: true, message: 'Please input the description!' }]}
                >
                  <TextArea
                    autoSize={{ minRows: 8, maxRows: 100 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            </Form>
          </Wrapper>
  )
}

export default WorkExperience
