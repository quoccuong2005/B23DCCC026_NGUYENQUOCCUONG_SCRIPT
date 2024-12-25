import React from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  InfoCircleOutlined,
  FileTextOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
function MenuSider() {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/admin">Tổng quan</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<InfoCircleOutlined />}>
          <Link to="info-company">Thông tin công ty</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FileTextOutlined />}>
          <Link to="jobmanager">Quản lý việc làm</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="cv-manager">Quản lý CV</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
export default MenuSider;
