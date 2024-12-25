import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailjob } from "../../../../services/jobService";
import { getCompanyDetail } from "../../../../services/companyService";
import { getTimeCurrent } from "../../../../helpers/getTimeCurrent";
import { createCV } from "../../../../services/cvService";
import { useLocation } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  notification as noti,
  Card,
  Row,
  Col,
  Tag,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

function JobDetail() {
  const location = useLocation();
  const params = useParams();
  const [job, setJob] = useState(null);
  const [form] = Form.useForm();
  const [company, setCompany] = useState(location.state?.company);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobData = await getDetailjob(params.id);
        const companyData = await getCompanyDetail(jobData.idCompany);
        setJob({
          ...jobData,
          infoCompany: companyData,
        });
      } catch (error) {
        noti.error({
          message: "Lỗi",
          description: "Không thể tải dữ liệu công việc.",
        });
      }
    };

    fetchData();
  }, [params.id]);
  console.log(job);
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Không sử dụng định dạng 12 giờ
    });
  }

  const onFinish = async (values) => {
    values.idJob = job.id;
    values.idCompany = job.infoCompany.company.id;
    values.createAt = getTimeCurrent();
    values.statusRead = false;
    try {
      const response = await createCV(values);
      if (response) {
        form.resetFields();
        noti.success({
          message: "Đăng ký thành công",
          description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
        });
      } else {
        throw new Error("Failed to create CV");
      }
    } catch (error) {
      noti.error({
        message: "Đăng ký không thành công",
        description: "Vui lòng thử lại.",
      });
    }
  };

  return (
    <div>
      <Button style={{ margin: "5px" }} onClick={() => navigate(-1)}>
        Quay lại
      </Button>
      {job ? (
        <>
          <div className="company-list">
            <a
              href="#formApply"
              style={{ display: "block", marginBottom: "20px" }}
            >
              <Button style={{ margin: "5px" }} type="primary">
                Ứng tuyển ngay
              </Button>
            </a>

            <div style={{ marginLeft: 20 }}>
              <h1>{job.name}</h1>
              <div style={{ marginBottom: 10 }}>
                <strong>Tên công ty: </strong>
                {job.infoCompany.company.companyName}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Tags: </strong>
                {job.tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Thành phố: </strong>
                {job.city.map((city) => (
                  <Tag color="orange" key={city}>
                    {city}
                  </Tag>
                ))}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Mức lương: </strong>
                {job.salary}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Địa chỉ công ty: </strong>
                {job.infoCompany.company.address}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Thời gian đăng bài: </strong>
                {formatDate(job.updateAt)}
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Mô tả công việc: </strong>
                <div>{job.description}</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <strong>Giới thiệu công ty: </strong>
                <div>{job.infoCompany.company.description}</div>
              </div>
            </div>
          </div>
          <Card
            title="Ứng tuyển ngay"
            id="formApply"
            style={{ marginTop: "20px" }}
          >
            <Form
              form={form}
              name="form_apply"
              onFinish={onFinish}
              layout="vertical"
            >
              <Row gutter={16}>
                {/* Họ và tên */}
                <Col span={12}>
                  <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ và tên." },
                    ]}
                  >
                    <Input placeholder="Nhập họ và tên của bạn" />
                  </Form.Item>
                </Col>

                {/* Email */}
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Vui lòng nhập email." },
                      { type: "email", message: "Email không hợp lệ." },
                    ]}
                  >
                    <Input placeholder="Nhập email của bạn" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Số điện thoại */}
                <Col span={12}>
                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại.",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập số điện thoại của bạn" />
                  </Form.Item>
                </Col>

                {/* Thành phố */}
                <Col span={12}>
                  <Form.Item
                    label="Thành phố"
                    name="city"
                    rules={[
                      { required: true, message: "Vui lòng chọn thành phố." },
                    ]}
                  >
                    <Select placeholder="Chọn thành phố">
                      {job.city.map((city) => (
                        <Select.Option key={city} value={city}>
                          {city}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              {/* Giới thiệu bản thân */}
              <Form.Item
                label="Giới thiệu bản thân"
                name="description"
                rules={[
                  { required: true, message: "Vui lòng giới thiệu bản thân." },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Viết vài lời giới thiệu về bạn"
                />
              </Form.Item>

              {/* Danh sách link project đã làm */}
              <Form.Item
                label="Danh sách link project đã làm"
                name="linkProject"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập danh sách link project.",
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Nhập danh sách link project của bạn"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Gửi ứng tuyển
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </>
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
}

export default JobDetail;
