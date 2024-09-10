import { Col, Form, Input, Row, Select } from "antd";
import Wrapper from "../Wrapper/Wrapper";
import { Mouse } from "lucide-react";
import { useStore } from "../../../../store/useStore";
import { observer } from "mobx-react-lite";

const Skills = observer(() => {
  const {
    FormInfo: {
      experience: { addSkills, skills },
    },
  } = useStore(null);

  const [form] = Form.useForm();

  const handleAdd = () => {
    if (!skills?.length) {
      for (let i = 0; i <= 1; i++) {
        addSkills();
      }
    } else {
      addSkills();
    }
  };

  const handleSkillChange = (e: any, index: number) => {
    if (!skills?.length) {
      addSkills();
    }

    skills[index].updateSkill(e?.target.value);
  };

  const handleLevelChange = (e: any, index: number) => {
    if (!skills?.length) {
      addSkills();
    }

    skills[index].updateLevel(e?.toString());
  };

  return (
    <Wrapper
      text="Skills"
      icon={<Mouse />}
      btnText="Add More Skills"
      isAddIcon
      onAdd={handleAdd}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Skill"
              name="skill"
              initialValue={skills?.[0]?.skill}
              rules={[
                {
                  required: true,
                  message: "Please input the description!",
                },
              ]}
            >
              <Input onChange={(e) => handleSkillChange(e, 0)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Level"
              name="level"
              initialValue={skills?.[0]?.level}
              rules={[
                {
                  required: true,
                  message: "Please input the description!",
                },
              ]}
            >
              <Select
                onChange={(e) => handleLevelChange(e, 0)}
                placeholder="Chose Level"
                allowClear
                options={[
                  { value: "0", label: "Expert" },
                  { value: "1", label: "Experienced" },
                  { value: "2", label: "Skillfull" },
                  { value: "3", label: "Intermediate" },
                  { value: "4", label: "Beginner" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        {skills.map((item, index) => {
          return index === 0 ? null : (
            <Row gutter={16} key = {index}>
              <Col span={12}>
                <Form.Item
                  label="Skill"
                  name={"skill"+index.toString()}
                  initialValue={item.skill}
                  rules={[
                    {
                      required: true,
                      message: "Please input the description!",
                    },
                  ]}
                >
                  <Input onChange={(e) => handleSkillChange(e, index)} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Level"
                  name={"level" + index.toString()}
                  initialValue={item.level}
                  rules={[
                    {
                      required: true,
                      message: "Please input the description!",
                    },
                  ]}
                >
                  <Select
                    onChange={(e) => handleLevelChange(e, index)}
                    placeholder="Chose Level"
                    allowClear
                    options={[
                      { value: "0", label: "Expert" },
                      { value: "1", label: "Experienced" },
                      { value: "2", label: "Skillfull" },
                      { value: "3", label: "Intermediate" },
                      { value: "4", label: "Beginner" },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
          );
        })}
      </Form>
    </Wrapper>
  );
});

export default Skills;
