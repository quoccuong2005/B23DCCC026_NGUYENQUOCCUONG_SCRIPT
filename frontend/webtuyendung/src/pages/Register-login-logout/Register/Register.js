import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, message, Form, Row, Col, Button } from "antd";
import { generratedToken } from "../../../helpers/generatetoken";
import { checkExits } from "../../../services/companyService";
import * as company from "../../../services/companyService";
import { Input } from "antd";
import img from "../../../img/b.jpg";
import "./Register.css";
function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    values.token = generratedToken();
    values.address = values.address || "Không có địa chỉ";
    values.workingTime = values.workingTime || "Không có thông tin";
    values.website = values.website || "Không có website";
    values.quantityPeople = values.quantityPeople || 0;
    values.description = values.description || "Không có mô tả";
    values.detail = values.detail || "Không có chi tiết";
    const checkExitsemail = await checkExits("email", values.email);
    const emailExists = checkExitsemail.some(
      (record) => record.email === values.email
    );
    console.log(checkExitsemail);
    const checkExitsphone = await checkExits("phone", values.phone);
    const phoneExists = checkExitsphone.some(
      (record) => record.phone === values.phone
    );

    if (emailExists) {
      message.error("Email đã tồn tại");
    } else if (phoneExists) {
      message.error("Số điện thoại đã tồn tại");
    } else {
      const result = await company.createCompany(values);
      if (result) {
        message.success("Đăng ký thành công");
        navigate("/login");
      }
    }
  };
  return (
    <>
      {contextHolder}
      <div className="register">
        <Row className="register__row" justify="center" align="top">
          <Col span={12}>
            <Card title="Đăng ký tài khoản">
              <Form onFinish={onFinish} layout="vertical">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Tên công ty"
                      name="companyName"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên công ty",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { required: true, message: "Vui lòng nhập email" },
                        { type: "email", message: "Email không hợp lệ" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="phone">
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Mật khẩu"
                      name="password"
                      rules={[
                        { required: true, message: "Vui lòng nhập mật khẩu" },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      label="Địa chỉ"
                      name="address"
                      rules={[
                        { required: true, message: "Vui lòng nhập địa chỉ" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Thời gian làm việc"
                      name="workingTime"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập thời gian làm việc",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Website"
                      name="website"
                      rules={[
                        {
                          type: "url",
                          message: "Vui lòng nhập đúng định dạng URL",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Số lượng nhân sự"
                      name="quantityPeople"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số lượng nhân sự",
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Mô tả" name="description">
                      <Input.TextArea />
                    </Form.Item>

                    <Form.Item label="Chi tiết" name="detail">
                      <Input.TextArea />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    {/* Replace this part with the image like in the login */}
                    <img
                      src={img}
                      alt="Login Illustration"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Col>
                </Row>

                <Form.Item>
                  <Button
                    style={{ marginRight: "3px" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Đăng ký
                  </Button>
                  <NavLink to="/">
                    <Button>Quay lại</Button>
                  </NavLink>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Register;
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Card, message, Form, Row, Col, Button } from "antd";
// import { generratedToken } from "../../../helpers/generatetoken";
// import { checkExits } from "../../../services/companyService";
// import * as company from "../../../services/companyService";
// import { Input } from "antd";
// import img from "../../../img/b.jpg";
// import "./Register.css";
// function Register() {
//   const [messageApi, contextHolder] = message.useMessage();
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     values.token = generratedToken();
//     values.address = values.address || "Không có địa chỉ";
//     values.workingTime = values.workingTime || "Không có thông tin";
//     values.website = values.website || "Không có website";
//     values.quantityPeople = values.quantityPeople || 0;
//     values.description = values.description || "Không có mô tả";
//     values.detail = values.detail || "Không có chi tiết";

//     const checkExitsemail = await checkExits("email", values.email);
//     const emailExists = checkExitsemail.some(
//       (record) => record.email === values.email
//     );
//     const checkExitsphone = await checkExits("phone", values.phone);
//     const phoneExists = checkExitsphone.some(
//       (record) => record.phone === values.phone
//     );

//     if (emailExists) {
//       messageApi.error("Email đã tồn tại");
//     } else if (phoneExists) {
//       messageApi.error("Số điện thoại đã tồn tại");
//     } else {
//       const result = await company.createCompany(values);
//       if (result) {
//         messageApi.success("Đăng ký thành công");
//         navigate("/login");
//       }
//     }
//   };

//   return (
//     <>

//     </>
//   );
// }

// export default Register;
