import React from "react";
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { NavLink } from "react-router";
import "./Header.scss";
function Header({ collapsed, setCollapsed }) {
  return (
    <>
      <div className="layout-admin--header">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ marginLeft: "16px" }}
        />
        <div className="header__menu">
          <ul className="header__menu--admin">
            <li className="header__menu--home">
              <NavLink to="/">
                <Button>Trang chủ</Button>
              </NavLink>
            </li>
            <li className="header__menu--logout">
              <NavLink to="/logout">
                <Button type="primary">Đăng xuất</Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
