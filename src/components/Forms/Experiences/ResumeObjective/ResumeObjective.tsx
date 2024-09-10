import { Col, Form, Row } from "antd"
import TextArea from "antd/es/input/TextArea"
import Wrapper from "../Wrapper/Wrapper"
import { CircleUser } from "lucide-react"
import { useStore } from '../../../../store/useStore'
import { useEffect } from "react"

const ResumeObjective = () => {
    const {FormInfo : {experience: { addResumeObjective ,resumeObjective} , } }  = useStore(null)
    const [form] = Form.useForm()

    useEffect(()=>{
        form.setFieldsValue({...resumeObjective})
    },[])

    const handleChange = (_: any, data: any) => {
      const newData = { ...data }
      addResumeObjective(newData)
    }


    return (
        <Wrapper text="Resume Objective" icon={<CircleUser />} isAddIcon={false}>
         <Form layout='vertical' onValuesChange={handleChange} form={form}>

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