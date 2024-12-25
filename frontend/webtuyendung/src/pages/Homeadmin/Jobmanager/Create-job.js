import { Form, message, Select, Switch, Input, Row, Col, Button } from "antd";
import { getCookie } from "../../../helpers/cookies";
import { useEffect, useState } from "react";
import { getListTags } from "../../../services/tagsService";
import { getTimeCurrent } from "../../../helpers/getTimeCurrent";
import { createJob } from "../../../services/jobService";
import { getCityList } from "../../../services/cityService";
function Createjob() {
  const idCompany = getCookie("id");
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);
  const [city, setCity] = useState([]);
  const [mess, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTags();
      if (response) {
        setTags(response);
      }
    };
    fetchApi();
  }, []);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getCityList();
      if (response) {
        setCity(response);
      }
    };
    fetchApi();
  }, []);
  const handleFinish = async (values) => {
    values.idCompany = idCompany;
    values.createAt = getTimeCurrent();
    const response = await createJob(values);
    if (response) {
      form.resetFields();
      mess.open({
        type: "success",
        content: "Tạo job mới thành công",
        duration: 5,
      });
    } else {
      mess.open({
        type: "error",
        content: "Tạo job mới thất bại",
        duration: 5,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <h1>Tạo job mới</h1>
      <Form onFinish={handleFinish} layout="vertical" form={form}>
        <Row gutter={20}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Tên job"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tiêu đề",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              name="tags"
              label="Tags"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tags",
                },
              ]}
            >
              <Select mode="multiple" options={tags} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Mức lương"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mức lương",
                },
              ]}
            >
              <Input addonAfter="$" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Thành phố làm việc" name="city">
              <Select mode="multiple" options={city} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Mô tả công việc"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mô tả công việc",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item valuePropName="checked" name="status" label="Trạng thái">
              <Switch checkedChildren="Bật" unCheckedChildren="Tắt" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default Createjob;
