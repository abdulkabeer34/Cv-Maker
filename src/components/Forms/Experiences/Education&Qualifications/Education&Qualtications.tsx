import { Col, DatePicker, Form, Input, Row } from 'antd'
import { GraduationCap } from 'lucide-react'
import TextArea from 'antd/es/input/TextArea';
import Wrapper from '../Wrapper/Wrapper';
import { useStore } from '../../../../store/useStore'
import { useEffect } from 'react'
import moment from 'moment';
import dayjs from 'dayjs'

const EducationAndQualtications = () => {
    
  const {FormInfo : {experience: { addEducationQualifications ,educationQualifications} , } }  = useStore(null)
  const [form] = Form.useForm()

  useEffect(()=>{
    form.setFieldsValue({...educationQualifications , startDate: educationQualifications?.startDate ? dayjs(educationQualifications?.startDate) : null , endDate: educationQualifications?.endDate ? dayjs(educationQualifications?.endDate) : null})
  },[])

  const handleChange = (_: any, data: any) => {
    const newData = { ...data, startDate: data?.startDate ? moment(data?.startDate)?.format('YYYY-MM-DD') :null, endDate: data?.endDate ? moment(data?.endData)?.format('YYYY-MM-DD') : null }
    addEducationQualifications(newData)
  }

  return (
    <Wrapper text='Education and Qualification' icon={<GraduationCap />}>
      <Form layout='vertical' onValuesChange={handleChange}  form={form}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Degree"
              name="degree"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City/Town"
              name="city"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="School"
              name="school"
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

export default EducationAndQualtications
