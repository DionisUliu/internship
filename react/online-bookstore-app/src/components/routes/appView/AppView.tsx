import React, { useState } from "react";
import { Layout, Menu, PageHeader, Button } from "antd";
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
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

const AppView: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
        subTitle={[
          <div onClick={() => setCollapsed(!collapsed)} className="trigger">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>,
        ]}
        extra={[
          <Button
            onClick={() => {
              navigate("/auth/logout");
            }}
            key="1"
            type="primary"
          >
            {t("appView.LOGOUT_BUTTON")}
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
                label: `${t("appView.BOOKS")}`,
              },
              {
                key: "settings",
                icon: <SettingOutlined />,
                label: `${t("appView.SETTINGS")}`,
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
