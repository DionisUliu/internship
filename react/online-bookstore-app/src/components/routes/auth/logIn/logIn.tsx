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
import i18n from "../../../../services/translationServices/translationServices";

const LogIn: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const enLanguageHandler = async () => {
    await i18n.changeLanguage("en");
  };

  const sqLanguageHandler = async () => {
    await i18n.changeLanguage("sq");
  };

  const { t } = useTranslation();

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a onClick={enLanguageHandler}>
              <img src="../united-kingdom.png" style={{ marginRight: 5 }}></img>
              <b>{t("language.ENGLISH")}</b>
            </a>
          ),
          key: "en",
        },
        {
          label: (
            <a onClick={sqLanguageHandler}>
              <img src="../albania.png" style={{ marginRight: 5 }}></img>
              <b>{t("language.ALBANIA")}</b>
            </a>
          ),
          key: "sq",
        },
      ]}
    />
  );

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
