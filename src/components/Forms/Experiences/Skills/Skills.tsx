import { Col, Form, Input, Row, Select } from "antd"
import Wrapper from "../Wrapper/Wrapper"
import { Mouse } from "lucide-react"
import { useStore } from '../../../../store/useStore'
import { toJS } from 'mobx'


const Skills = () => {

    const store = useStore(null)

    const handleChange = (_: any, data: any) => {
        const newData = { ...data }
        store.FormInfo.experience.addSkills(newData)
        console.log(toJS(store.FormInfo.experience.skills))
    }

    return (
        <Wrapper text="Skills" icon={<Mouse />}>
            <Form layout='vertical' onValuesChange={handleChange}>
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
                            name="level"
                            rules={[{ required: true, message: 'Please input the description!' }]}
                        >
                            <Select
                                // defaultValue=""
                                placeholder="Chose Level"
                                allowClear
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