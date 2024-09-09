import { Col, Form, Input, Row } from "antd"
import Wrapper from "../Wrapper/Wrapper"
import { Palette } from "lucide-react"
import { useStore } from '../../../../store/useStore'
import { observer } from "mobx-react-lite"

const Interest = observer(() => {
    const store = useStore(null)


    const handleAdd = () => {
        if(!store.FormInfo.experience.interest.length){
            for(let i = 0 ; i<=1 ; i++){
                store.FormInfo.experience.addInterest()
            }

            
        }

        else{
            store.FormInfo.experience.addInterest()
        }
    }

    const handleChange  = (e:any,index:number)=>{
        if(!store.FormInfo.experience.interest.length){
                store.FormInfo.experience.addInterest()
        }

        store.FormInfo.experience.interest[index].updateHobby(e?.target.value)
    }


    return (
        <Wrapper text="Interest" icon={<Palette />} btnText="Add More Hobbies" isAddIcon onAdd={handleAdd}>
            <Form layout='vertical' >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            label="Hobby"
                            name="hobby"
                            rules={[{ required: true, message: 'Please input the description!' }]}
                            initialValue={store.FormInfo.experience.interest[0]?.hobby ?? ""}
                        >
                            <Input onChange={(e)=>handleChange(e,0)} />
                        </Form.Item>
                    </Col>
                </Row>
                {store.FormInfo.experience.interest.map((item, index) => {
                    return index === 0 ? null :
                        (
                            <Row key={index} gutter={16} className="pt-4">
                                <Col span={24}>
                                    <Form.Item
                                        label="Hobby"
                                        name={`hobby${index}`}
                                        initialValue={item?.hobby ?? ""}
                                        rules={[{ required: true, message: 'Please input the description!' }]}
                                    >
                                        <Input onChange={(e)=>handleChange(e,index)} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        )
                })}
            </Form>
        </Wrapper>
    )
})

export default Interest