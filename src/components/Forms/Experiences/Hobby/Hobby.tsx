import { Col, Form, Input, Row } from "antd"
import Wrapper from "../Wrapper/Wrapper"
import { Palette } from "lucide-react"

const Interest = () => {
    return (
        <Wrapper text="Interest" icon={<Palette />}>
            <Form layout='vertical'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            label="Hobby"
                            name="hobby"
                            rules={[{ required: true, message: 'Please input the description!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Wrapper>
    )
}

export default Interest