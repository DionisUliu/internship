import "./LoginForm.scss";
import React from "react";
import { Button, Form, Input, Checkbox } from "antd";
import {
  LockOutlined,
  UserOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "../../../services/translationServices/translationServices";
const LogIn: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="login-wrapper">
        <div className="login-header">
          <div className="login-logo">
            <img src="../softup-logo.png" style={{ width: 100 }}></img>
            <div className="app-title">
              <h1>Softup Bookstore</h1>
            </div>
          </div>
        </div>
        <span className="descripton-login">{t("login.TITLE")}</span>
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
                { required: true, message: `${t("error.USERNAME_ERROR")}` },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                className="login-input-style"
                placeholder={t("login.USERNAME_FIELD")}
              />
            </Form.Item>
            <Form.Item
              name="password"
              className="fields-field-style"
              rules={[
                { required: true, message: `${t("error.PASSWORD_ERROR")}` },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                className="login-input-style"
                type="password"
                placeholder={t("login.PASSWORD_FIELD")}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{t("login.REMEMBER_ME")}</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {t("login.LOGIN")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
