import React from "react";
import { useNavigate } from "react-router-dom";
import { message, Input, Button, Form, Row, Col, Card } from "antd";
import { useDispatch } from "react-redux";
// import * as company from "../../../services/companyService";
import { login } from "../../../services/companyService";
import { setCookie } from "../../../helpers/cookies";
import { checkLogin } from "../../../actions/checkAuthen";
import { NavLink } from "react-router-dom";
import loginImage from "../../../img/b.jpg";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const data = await login(values.email, values.password);
    console.log("data", data);

    if (data && data.company) {
      const time = 1;
      setCookie("token", data.company.token, time);
      setCookie("id", data.company.id, time);
      setCookie("email", data.company.email, time);
      setCookie("companyName", data.company.companyName, time);
      dispatch(checkLogin(true));
      message.success("Đăng nhập thành công");
      navigate("/");
    } else {
      message.error("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <>
      {contextHolder}
      <div className="login">
        <Row
          className="login__row"
          style={{ justifyContent: "center", marginTop: "80px" }}
        >
          <Col span={18}>
            <Card title="Đăng nhập">
              <Form onFinish={onFinish} layout="vertical">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập email",
                        },
                        {
                          type: "email",
                          message: "Email không hợp lệ",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Mật khẩu"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mật khẩu",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Item>
                        <Button
                          style={{ marginRight: "3px" }}
                          htmlType="submit"
                          type="primary"
                        >
                          Đăng nhập
                        </Button>
                        <NavLink to={"/"}>
                          <Button>Quay lại</Button>
                        </NavLink>
                      </Form.Item>
                      <NavLink to="/register">Bạn chưa có tài khoản ?</NavLink>
                    </div>
                  </Col>
                  <Col
                    span={12}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      src={loginImage}
                      alt="Login Illustration"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Login;
