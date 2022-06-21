import "./LogIn.scss";
import React from "react";
import {
  Button,
  Form,
  Input,
  Checkbox,
  PageHeader,
  Dropdown,
  Menu,
  Space,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const LogIn: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">Englisht</a>,
          key: "en",
        },
        {
          label: <a href="https://www.aliyun.com">Albania</a>,
          key: "sq",
        },
      ]}
    />
  );

  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        className="site-page-header"
        extra={[
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <TranslationOutlined style={{ fontSize: 20, color: "black" }} />
              </Space>
            </a>
          </Dropdown>,
        ]}
      />

      <div className="login-wrapper">
        <div className="login-header">
          <div className="login-logo">
            <img src="../softup-logo.png" style={{ width: 100 }}></img>
          </div>
          <div className="app-title">
            <h1>Softup Bookstore</h1>
          </div>
        </div>
        <span className="descripton-login">
          Welcome to our bookstore, try to login to use our services
        </span>
        <div className="login-container">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              className="fields-field-style"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                className="login-input-style"
                placeholder="Username: admin or user"
              />
            </Form.Item>
            <Form.Item
              name="password"
              className="fields-field-style"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                className="login-input-style"
                type="password"
                placeholder="Password: softup.bookstore"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {t("login.test")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
