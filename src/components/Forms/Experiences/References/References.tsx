import { Col, Form, Input, Row } from 'antd'
import Wrapper from '../Wrapper/Wrapper'
import { MessageSquareText } from 'lucide-react'
import { useStore } from '../../../../store/useStore'
import { toJS } from 'mobx'

const References = () => {
    
    const store = useStore(null)

    const handleChange = (_: any, data: any) => {
      const newData = { ...data }
      store.FormInfo.experience.addReferences(newData)
      console.log(toJS(store.FormInfo.experience.references))
    }

    return (
        <Wrapper text='References' icon={<MessageSquareText />}>
        <Form layout='vertical' onValuesChange={handleChange}>
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
                                name="companyContactPerson"
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
                                name="companyPhoneNumber"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input type='number' />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Email Address"
                                name="companyEmailAddress"
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