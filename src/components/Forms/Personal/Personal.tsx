import React, { useEffect, useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useStore } from "../../../store/useStore";
import dayjs from "dayjs";
import moment from "moment";

const Personal: React.FC = () => {
  const [isAddtional, setIsAdditonal] = useState<boolean>(false);
  const {
    FormInfo: { addPersonalInfo, personalInfo },
  } = useStore(null);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...personalInfo,
      dateOfBirth: personalInfo?.dateOfBirth
        ? dayjs(personalInfo?.dateOfBirth)
        : null,
    });
  }, []);

  const handleChange = (_: any, data: any) => {
    const newData = {
      ...data,
      dateOfBirth: data?.dateOfBirth
        ? moment(data?.dateOfBirth)?.format("YYYY-MM-DD")
        : null,
    };

    addPersonalInfo({ ...newData });
  };

  return (
    <div className="content-area mx-auto  w-10/12 ">
      <div className="mb-10">
        <h1 className="text-4xl">Peronal Information</h1>
        <p className="text-gray-500 text-sm mt-2">
          Enter Your Peronal Information
        </p>
      </div>
      <Form layout="vertical" onValuesChange={handleChange} form={form}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please provider valid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                { required: true, message: "Please provider phone number!" },
              ]}
            >
              <Input
                type="number"
                prefix={false}
                addonAfter={false}
                maxLength={15}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your personal address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="City/Town"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please input your city/town name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <motion.div
          className="overflow-x-hidden"
          initial={{ height: 0 }}
          animate={{ height: isAddtional ? "auto" : 0 }}
          transition={{ duration: 0.4 }}
          style={{ scrollbarWidth: "none" }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Date Of Birth"
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please input your personal address!",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Place of Birth"
                name="birthPlace"
                rules={[
                  {
                    required: true,
                    message: "Please input your city/town name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Driving License"
                name="drivingLicense"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Select
                  placeholder="Chose Gender"
                  allowClear
                  options={[
                    { value: "female", label: "Female" },
                    { value: "male", label: "Male" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Nationality"
                name="nationality"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Martial Status"
                name="martialStatus"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="LinkedIn"
                name="linkedin"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Website"
                name="website"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </motion.div>
        <Row gutter={16} className="mt-10 w-full">
          <Col span={24}>
            <Button
              className="w-full h-14 text-lg flex gap-x-4"
              onClick={() => setIsAdditonal((prev) => !prev)}
            >
              <PlusCircle />
              <span>Additional Information</span>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Personal;
