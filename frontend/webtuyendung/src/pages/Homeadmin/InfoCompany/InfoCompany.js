import React, { useEffect, useState } from "react";
import { getCookie } from "../../../helpers/cookies";
import { getCompanyDetail } from "../../../services/companyService";
import { Form, message, Input, Col, Button, Card, Row } from "antd";
import { editCompany } from "../../../services/companyService";
const { TextArea } = Input;
function InfoCompany() {
  const idCompany = getCookie("id");
  const [info, setInfo] = useState();
  const [edit, setEdit] = useState(false);
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getCompanyDetail(idCompany);
      if (response) {
        setInfo(response);
      }
    };
    fetchApi();
  }, []);

  const handleFinish = async (values) => {
    const response = await editCompany(idCompany, values);
    if (response) {
      mess.success("Cập nhật thông tin công ty thành công");

      setEdit(false);
    } else {
      mess.error("Cập nhật thông tin công ty thất bại");
    }
  };
  const handleEdit = () => {
    setEdit(true);
  };
  const handleCancle = () => {
    setEdit(false);
  };
  return (
    <>
      {contextHolder}
      {info && (
        <Card
          title="Thông tin công ty"
          extra={
            !edit ? (
              <Button onClick={handleEdit}>Chỉnh sửa</Button>
            ) : (
              <Button onClick={handleCancle}>Hủy</Button>
            )
          }
        >
          <Form
            layout="vertical"
            onFinish={handleFinish}
            form={form}
            disabled={!edit}
            initialValues={info.company}
          >
            <Row gutter={20}>
              <Col span={24}>
                <Form.Item
                  label="Tên công ty"
                  name="companyName"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên công ty" },
                  ]}
                >
                  <Input placeholder="Tên công ty" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email công ty" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại" },
                  ]}
                >
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
                >
                  <Input placeholder="Địa chỉ" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số lượng nhân viên"
                  name="quantityPeople"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số lượng nhân viên",
                    },
                  ]}
                >
                  <Input placeholder="Số lượng nhân viên" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Thời gian làm việc"
                  name="workingTime"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập thời gian làm việc",
                    },
                  ]}
                >
                  <Input placeholder="Thời gian làm việc" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Link website"
                  name="website"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập link website",
                    },
                  ]}
                >
                  <Input placeholder="Link website" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Mô tả ngắn "
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mô tả ngắn về công ty",
                    },
                  ]}
                >
                  <TextArea placeholder="Mô tả ngắn" rows={16} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Mô tả chi tiết"
                  name="detail"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mô tả chi tiết về công ty",
                    },
                  ]}
                >
                  <TextArea placeholder="Mô tả chi tiết" rows={16} />
                </Form.Item>
              </Col>
              {edit && (
                <Col span={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Lưu
                    </Button>
                  </Form.Item>
                </Col>
              )}
            </Row>
          </Form>
        </Card>
      )}
    </>
  );
}
export default InfoCompany;
