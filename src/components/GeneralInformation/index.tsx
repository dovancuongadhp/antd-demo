import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Radio, Select } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const GeneralInfomation: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Disabled
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Họ Và Tên" name={"fullName"}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name={"email"}>
          <Input />
        </Form.Item>
        <Form.Item label="Giới tính" name={"sex"}>
          <Radio.Group>
            <Radio value="male"> Nam </Radio>
            <Radio value="femle"> Nữ </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Ngày sinh" name={"birthday"}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Địa chỉ" name={"address"}>
          <Select>
            <Select.Option value="1">Hải Phòng</Select.Option>
            <Select.Option value="2">Hà Nội</Select.Option>
            <Select.Option value="3">Hồ Chí Minh</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="Ghi chú" name={"note"}>
          <TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default GeneralInfomation;
