import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import MenuSider from "./MenuSider/MenuSider";
import "./layoutadmin.scss";
const { Sider, Content } = Layout;
function LayoutAdmin() {
  const checkAuthen = useSelector((state) => state.loginReducer);
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
      <Layout className="layout-admin">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout
          className={
            "layout-admin__main" + (collapsed && "layout_admin__main--fold")
          }
        >
          <Sider
            breakpoint="lg"
            className="layout-admin__sider"
            theme="light"
            collapsed={collapsed}
            onBreakpoint={(e) => setCollapsed(e)}
          >
            <MenuSider />
          </Sider>
          <Content className="layout-admin__content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LayoutAdmin;
