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

const { Content, Sider, Footer } = Layout;

const AppView: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

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
            onSelect={() => {
              navigate("/app/books");
            }}
            items={[
              {
                key: "1",
                icon: <BookOutlined />,
                label: "Books",
              },
              {
                key: "2",
                icon: <SettingOutlined />,
                label: "Settings",
              },
            ]}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px", height: "95vh" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created with ReactJS by Dionis Uliu
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppView;
