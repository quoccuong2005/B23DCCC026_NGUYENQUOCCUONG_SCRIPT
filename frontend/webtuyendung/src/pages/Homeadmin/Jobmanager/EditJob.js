import {
  Form,
  message,
  Input,
  Select,
  Option,
  Button,
  Tooltip,
  Modal,
  Switch,
} from "antd";
import { getListTags } from "../../../services/tagsService";
import { useState, useEffect } from "react";
import { getCityList } from "../../../services/cityService";
import { getTimeCurrent } from "../../../helpers/getTimeCurrent";
import { updateJob } from "../../../services/jobService";
import { EditOutlined } from "@ant-design/icons";
function EditJob(props) {
  const { record, onReload } = props;

  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);
  const [city, setCity] = useState([]);
  const [mess, contextHolder] = message.useMessage();
  const [idModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
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
    values.updateAt = getTimeCurrent();
    const response = await updateJob(record.id, values);
    if (response) {
      setIsModalOpen(false);
      onReload();
      mess.open({
        type: "success",
        content: "Cập nhật job thành công",
        duration: 5,
      });
    } else {
      mess.open({
        type: "error",
        content: "Cập nhật job thất bại",
        duration: 5,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Tooltip title="Chỉnh sửa">
        <Button
          onClick={showModal}
          icon={<EditOutlined />}
          type="primary"
        ></Button>
      </Tooltip>
      {idModalOpen && (
        <Modal
          title="Chỉnh sửa Job"
          visible={idModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            onFinish={handleFinish}
            layout="vertical"
            form={form}
            initialValues={record}
          >
            <Form.Item
              name="name"
              label="Tên công việc"
              rules={[{ required: true, message: "Vui lòng nhập tên job" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="tags"
              label="Tags"
              rules={[{ required: true, message: "Vui lòng chọn tags" }]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Tags Mode"
              >
                {tags.map((item, index) => {
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>;
                })}
              </Select>
            </Form.Item>

            <Form.Item
              name="salary"
              label="Mức lương ($)"
              rules={[{ required: true, message: "Vui lòng nhập mức lương" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="city"
              label="Thành phố"
              rules={[{ required: true, message: "Vui lòng chọn thành phố" }]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Tags Mode"
              >
                {city.map((item, index) => {
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>;
                })}
              </Select>
            </Form.Item>

            <Form.Item
              name="description"
              label="Mô tả"
              rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item valuePropName="checked" name="status" label="Trạng thái">
              <Switch checkedChildren="Bật" unCheckedChildren="Tắt" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default EditJob;
