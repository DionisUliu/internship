import { PageHeader, Dropdown, Menu, Space } from "antd";
import { TranslationOutlined } from "@ant-design/icons";
import i18n from "../../../services/translationServices/translationServices";
import { useTranslation } from "react-i18next";
import "./Translator.scss";

const Translator = () => {
  const { t } = useTranslation();
  const enLanguageHandler = async () => {
    await i18n.changeLanguage("en");
  };

  const sqLanguageHandler = async () => {
    await i18n.changeLanguage("sq");
  };

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
  );
};

export default Translator;
