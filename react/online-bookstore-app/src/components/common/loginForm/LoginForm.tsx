import "./LoginForm.scss";
import React from "react";
import { Checkbox } from "antd";
import { Form, Input, SubmitButton } from "formik-antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik } from "formik";

const LogIn: React.FC = () => {
  const { t } = useTranslation();

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, `${t("error.USERNAME_MIN_CHAR_ERROR")}`)
      .max(20, `${t("verror.USERNAME_MAX_CHAR_ERROR")}`)
      .required(`${t("error.USERNAME_ERROR")}`),
    password: Yup.string()
      .min(4, `${t("error.PASSWORD_MIN_CHAR_ERROR")}`)
      .max(10, `${t("error.PASSWORD_MAX_CHAR_ERROR")}`)
      .required(`${t("error.PASSWORD_ERROR")}`),
  });

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <div className="login-logo">
          <img
            src="../softup-logo.png"
            style={{ width: "80px" }}
            alt="Softup"
          ></img>
          <div className="app-title">
            <h1>Softup Bookstore</h1>
          </div>
        </div>
      </div>
      <span className="descripton-login">{t("login.TITLE")}</span>
      <div className="login-container">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log("values", values);
          }}
        >
          {({ errors, values }) => (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                className="fields-field-style"
                rules={[{ required: true, message: `${errors.username}` }]}
              >
                <Input
                  name="username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  className="login-input-style"
                  placeholder={t("login.USERNAME_FIELD")}
                />
              </Form.Item>
              <Form.Item
                name="password"
                className="fields-field-style"
                rules={[
                  {
                    required: true,
                    message: `${errors.password}`,
                  },
                ]}
              >
                <Input.Password
                  name="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  className="login-input-style"
                  type="password"
                  placeholder={t("login.PASSWORD_FIELD")}
                />
              </Form.Item>

              <Form.Item name="fields-field-style">
                <Form.Item
                  className="check"
                  name="remember"
                  valuePropName="checked"
                  noStyle
                >
                  <Checkbox className="rememberMe" name="remember">
                    {t("login.REMEMBER_ME")}
                  </Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item name="fields-field-style">
                <SubmitButton
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {t("login.LOGIN")}
                </SubmitButton>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;
