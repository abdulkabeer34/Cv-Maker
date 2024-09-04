import { Col, Form, Input, Row, Select } from "antd"
import Wrapper from "../Wrapper/Wrapper"
import { Mouse } from "lucide-react"

const Skills = () => {
    return (
        <Wrapper text="Skills" icon={<Mouse />}>
            <Form layout='vertical'>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Skill"
                            name="skill"
                            rules={[{ required: true, message: 'Please input the description!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Level"
                            name="levek"
                            rules={[{ required: true, message: 'Please input the description!' }]}
                        >
                            <Select
                                defaultValue="lucy"
                                options={[
                                    { value: 'expert', label: 'Expert' },
                                    { value: 'experienced', label: 'Experienced' },
                                    { value: 'skillfull', label: 'Skillfull' },
                                    { value: 'intermediate', label: 'Intermediate' },
                                    { value: 'beginner', label: 'Beginner' },

                                ]}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Wrapper>
    )
}

export default Skills