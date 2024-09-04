import { Col, Form, Row } from "antd"
import TextArea from "antd/es/input/TextArea"
import Wrapper from "../Wrapper/Wrapper"
import { CircleUser } from "lucide-react"

const ResumeObjective = () => {
    return (
        <Wrapper text="Resume Object" icon={<CircleUser />}>
         <Form layout='vertical'>

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

export default ResumeObjective