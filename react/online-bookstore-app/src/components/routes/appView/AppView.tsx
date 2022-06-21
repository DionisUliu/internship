import "./AppView.scss";
import {
  DashboardOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Books", "1", <DashboardOutlined />),
  getItem("Settings", "2", <SettingOutlined />),
];

const AppView: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate(`dashboard`);
  };
  const navigateToSettings = () => {
    navigate(`settings`);
  };

  return (
    <div className="appView-container">
      <PageHeader
        className="site-page-header"
        title="Softup Bookstore"
        avatar={{
          src: "../softup-logo.png",
          style: { width: 50 },
        }}
        extra={[
          <Button key="1" type="primary">
            Logout
          </Button>,
        ]}
      />

      <div className="menu-container">
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
        <Button type="text" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
    </div>
  );
};
export default AppView;
