import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, PageHeader, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./AppView.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

const { Content, Sider, Footer } = Layout;

const AppView: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "books") {
      navigate("books");
    } else if (e.key === "settings") {
      navigate("settings");
    }
  };

  return (
    <Layout className="site-page-header">
      <PageHeader
        title="Softup Bookstore"
        extra={[
          React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          ),
          <Button
            onClick={() => {
              navigate("/auth/logout");
            }}
            key="1"
            type="primary"
          >
            Logout
          </Button>,
        ]}
        avatar={{
          src: "../softup-logo.png",
        }}
      />

      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="site-layout-background"
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={onClick}
            items={[
              {
                key: "books",
                icon: <BookOutlined />,
                label: "Books",
              },
              {
                key: "settings",
                icon: <SettingOutlined />,
                label: "Settings",
              },
            ]}
          />
        </Sider>

        <Outlet />
      </Layout>
    </Layout>
  );
};

export default AppView;
