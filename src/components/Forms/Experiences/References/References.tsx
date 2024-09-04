import { Col, Form, Input, Row } from 'antd'
import Wrapper from '../Wrapper/Wrapper'
import { MessageSquareText } from 'lucide-react'

const References = () => {


    return (
        <Wrapper text='References' icon={<MessageSquareText />}>
        <Form layout='vertical'>
            
              <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Company Name"
                                name="companyName"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Contact Person"
                                name="companyPerson"
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Phone Number"
                                name="phoneNumber"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input type='number' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    </Form>
        </Wrapper>
    )
}

export default References