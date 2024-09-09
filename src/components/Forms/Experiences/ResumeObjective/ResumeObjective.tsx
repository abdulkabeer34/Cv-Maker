import { Col, Form, Row } from "antd"
import TextArea from "antd/es/input/TextArea"
import Wrapper from "../Wrapper/Wrapper"
import { CircleUser } from "lucide-react"
import { useStore } from '../../../../store/useStore'
import { toJS } from 'mobx'

const ResumeObjective = () => {
    const store = useStore(null)

    const handleChange = (_: any, data: any) => {
      const newData = { ...data }
      store.FormInfo.experience.addResumeObjective(newData)
      console.log(toJS(store.FormInfo.experience.resumeObjective))
    }


    return (
        <Wrapper text="Resume Objective" icon={<CircleUser />}>
         <Form layout='vertical' onValuesChange={handleChange}>

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